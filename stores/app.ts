import { defineStore, skipHydrate } from "pinia";
import { Plan } from "@/types/global";

export const useAppStore = defineStore("app", () => {
	// state
	const plans = ref([]);

	// actions
	async function init() {
		console.log("app store init");
		try {
			plans.value = await $fetch("/api/v1/app/getPlans", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (error) {
			console.log(error);
		}
	}

	// getters

	return {
		plans,
		init,
	};
});
