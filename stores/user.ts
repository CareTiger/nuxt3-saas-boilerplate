import { defineStore } from "pinia";
import { useNotesStore } from "./notes";
import { Account, Maybe } from "~/types/global";

export const useUserStore = defineStore({
	id: "user-store",
	state: () => ({
		id: null as Maybe<number>,
		email: null as Maybe<string>,
		displayName: null as Maybe<string>,
		account: null as Maybe<Account>,
	}),
	actions: {
		async init() {
			const user = useSupabaseUser();
			if (user.value) {
				const data = await $fetch("/api/v1/user/getProfile", {
					method: "GET",
					params: {
						userUid: user.value.id,
					},
				});
				this.id = data.id;
				this.email = data.email;
				this.displayName = data.display_name;
				this.account = data.account;
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
