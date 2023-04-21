export type Maybe<T> = T | null | undefined;

export type Profile = {
	id: number;
	email: string;
	role: string;
	account: Account;
	notes: Note[];
};

export type Account = {
	id: number;
	first_name: string;
	last_name: string;
	plan_id: number;
	stripe_customer_id: string;
	stripe_subscription_id: string;
	current_period_end: string;
};
export type Note = {
	id: number;
	profileId: number;
	title: string;
	content: string;
};
