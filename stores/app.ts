import { defineStore } from "pinia";

export const useAppStore = defineStore({
	id: "app-store",
	state: () => ({
		plans: [],
	}),
	actions: {
		async init() {
			console.log("app store init");
			try {
				this.plans = await $fetch("api/v1/app/getPlans", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
	getters: {},
});
