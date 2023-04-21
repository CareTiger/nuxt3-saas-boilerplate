import { defineStore } from "pinia";
import { useNotesStore } from "./notes";
import { Profile, Maybe } from "~/types/global";

export const useUserStore = defineStore({
	id: "user-store",
	state: () => ({
		profile: null as Maybe<Profile> | null,
	}),
	actions: {
		async init() {
			const user = useSupabaseUser();
			if (user.value) {
				console.log("user value", user.value);
				this.profile = await $fetch("/api/v1/user/getProfile", {
					method: "GET",
					params: {
						user_uid: user.value.id,
					},
				});
				console.log(user);
			}
		},
		signout() {
			console.log("signout");
		},
	},
	getters: {},
});
