export type Maybe<T> = T | null | undefined;

export type Account = {
	id: number;
	first_name: string;
	last_name: string;
	plan_id: number | null;
	stripe_customer_id: string | null;
	stripe_subscription_id: string | null;
	current_period_ends: string | null;
};

export type Note = {
	id: number;
	profileId: number;
	title: string;
	content: string;
};
