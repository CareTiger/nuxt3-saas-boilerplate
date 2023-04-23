import { defineStore } from "pinia";
import { useNotesStore } from "./notes";
import { User, Account, Note, Maybe } from "~/types/global";

export const useUserStore = defineStore({
	id: "user-store",
	state: () => ({
		id: null,
		email: "",
		displayName: "",
		role: "",
		account: <Account>{},
	}),
	actions: {
		async init(): Promise<void> {
			const supabaseUser = useSupabaseUser();
			if (supabaseUser.value) {
				const promise: Promise<any> = new Promise((resolve, reject) => {
					$fetch("/api/v1/user/getProfile", {
						method: "GET",
						params: {
							userUid: supabaseUser.value?.id,
						},
					})
						.then((response) => {
							resolve(response);
						})
						.catch((error) => {
							reject(error);
						});
				});
				const data = await promise;
				this.id = data.id;
				this.email = data.email;
				this.displayName = data.display_name;
				this.role = data.role;
				// account object
				this.account.id = data.account.id;
				this.account.planId = data.account.plan_id;
				this.account.stripeCustomerId = data.account.stripe_customer_id;
				this.account.stripeSubscriptionId =
					data.account.stripe_subscription_id;
				this.account.currentPeriodEnds =
					data.account.current_period_ends;
				// notes array
				useNotesStore().init(data.notes);
				console.log(data);
			}
		},
	},
	getters: {},
});
