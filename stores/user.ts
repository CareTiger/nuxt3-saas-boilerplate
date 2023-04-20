import { defineStore } from "pinia";

export const useUserStore = defineStore({
	id: "user-store",
	state: () => ({
		profile: null,
	}),
	actions: {
		init() {
			console.log("user store init");
		},
		signout() {
			console.log("signout");
		},
	},
	getters: {},
});
