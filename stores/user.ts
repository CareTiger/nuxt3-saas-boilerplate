import { defineStore } from "pinia";
import { useNotesStore } from "./notes";
import { Account, Maybe } from "~/types/global";

export const useUserStore = defineStore({
	id: "user-store",
	state: () => ({
		id: null as Maybe<number>,
		email: null as Maybe<string>,
		account: null as Maybe<Account>,
		role: null as Maybe<string>,
	}),
	actions: {
		async init() {
			const user = useSupabaseUser();
			if (user.value) {
				const data = await $fetch("/api/v1/user/getProfile", {
					method: "GET",
					params: {
						user_uid: user.value.id,
					},
				});
				this.id = data.id;
				this.email = data.email;
				this.account = data.account;
				this.role = data.role;
				useNotesStore().init(data.notes);
			}
		},
		signout() {
			// this.profile = null;
			useNotesStore().notes = [];
		},
	},
	getters: {},
});
