import { defineStore, skipHydrate } from "pinia";
import { Account } from "~/types/global";
import { useNotesStore } from "./notes";
import convertKeysToCamelCase from "~/utils";

export const useUserStore = defineStore("user", () => {
	// state
	const id = ref(null);
	const email = ref("");
	const displayName = ref("");
	const role = ref("");
	const account = ref(<Account>{});

	// actions
	async function init(): Promise<void> {
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
						const convertedData = convertKeysToCamelCase(response);
						resolve(convertedData);
					})
					.catch((error) => {
						reject(error);
					});
			});
			const data = await promise;
			id.value = data.id;
			email.value = data.email;
			displayName.value = data.displayName;
			role.value = data.role;
			account.value = data.account;
			useNotesStore().init(data.notes);
		}
	}

	// doesnt work
	// async function init(): Promise<void> {
	// 	const user = useSupabaseUser();
	// 	if (!user.value) return;

	// 	const response = await $fetch("/api/v1/user/getProfile", {
	// 		method: "GET",
	// 		params: {
	// 			userUid: user.value?.id,
	// 		},
	// 	});
	// 	const data = await response.json();
	// }
	// getters

	return {
		id,
		email,
		displayName,
		role,
		account,
		init,
	};
});
