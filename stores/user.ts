import { defineStore } from "pinia";

export const useUserStore = defineStore({
	id: "user-store",
	state: () => ({}),
	actions: {
		init() {
			console.log("init");
		},
		signout() {
			console.log("signout");
		},
	},
	getters: {},
});
