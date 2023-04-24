export type Maybe<T> = T | null | undefined;

export type User = {
	id: number;
	email: string;
	displayName: string | null;
	role: string;
	account: Account;
	notes: Note[];
};

export type Account = {
	id: number;
	planId: number;
	stripeCustomerId: string;
	stripeSubscriptionId: string;
	currentPeriodEnds: string;
};

export type Note = {
	id: number;
	profileId: number;
	title: string;
	content: string;
};

export type Plan = {
	audience: string;
	description: string;
	featured: boolean;
	features: string[] | null;
	id: number;
	maxNotes: number;
	name: string;
	price: number;
	stripeProductId: string | null;
};
