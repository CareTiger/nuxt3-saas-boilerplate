import { defineStore } from "pinia";

export const useAccountStore = defineStore({
	id: "account-store",
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
