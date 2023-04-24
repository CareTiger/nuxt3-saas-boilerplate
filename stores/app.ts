import { defineStore, skipHydrate } from "pinia";
import { Plan } from "@/types/global";
import { useConvertKeysToCamelCase } from "@/composables/useHelpers";

export const useAppStore = defineStore("app", () => {
	// state
	const plans = ref(<Plan[]>[]);

	// actions
	async function init(): Promise<void> {
		try {
			const response = await $fetch("/api/v1/app/getPlans", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response;
			if (!data) {
				throw new Error("Error getting plans");
			}
			plans.value = useConvertKeysToCamelCase(data);
		} catch (error) {
			console.log(error);
		}
	}

	return {
		plans,
		init,
	};
});
