import { defineStore } from "pinia";

export const useAppStore = defineStore({
	id: "app-store",
	state: () => ({
		plans: [],
	}),
	actions: {
		init() {
			console.log("app store init");
		},
	},
	getters: {},
});
