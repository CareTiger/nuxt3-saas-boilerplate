import { defineStore } from "pinia";
import { useNotesStore } from "./notes";
import { User, Account, Note, Maybe } from "~/types/global";
import convertKeysToCamelCase from "~/stores/helperFunctions";

export const useUserStore = defineStore({
	id: "user-store",
	state: () => ({
		id: null,
		email: "",
		displayName: "",
		role: "",
		account: <Account>{},
	}),
	actions: {
		convertKeysToCamelCase(obj: any): any {
			console.log(obj);
			if (typeof obj !== "object" || obj === null) {
				return obj;
			}

			if (Array.isArray(obj)) {
				return obj.map((item) => convertKeysToCamelCase(item));
			}

			const converted: any = {};
			for (const key in obj) {
				if (obj.hasOwnProperty(key)) {
					const camelCaseKey = key.replace(/_\w/g, (match) =>
						match[1].toUpperCase()
					);
					converted[camelCaseKey] = convertKeysToCamelCase(obj[key]);
				}
			}

			return converted;
		},

		async init(): Promise<void> {
			const supabaseUser = useSupabaseUser();
			if (supabaseUser.value) {
				const promise: Promise<any> = new Promise((resolve, reject) => {
					$fetch("/api/v1/user/getProfile", {
						method: "GET",
						params: {
							userUid: supabaseUser.value?.id,
						},
					})
						.then((response) => {
							const convertedData =
								convertKeysToCamelCase(response);
							resolve(convertedData);
						})
						.catch((error) => {
							reject(error);
						});
				});
				const data = await promise;
				console.log("camelCase data", data);
				this.id = data.id;
				this.email = data.email;
				this.displayName = data.displayName;
				this.role = data.role;
				this.account = data.account;
				useNotesStore().init(data.notes);
			}
		},
	},
	getters: {},
});
