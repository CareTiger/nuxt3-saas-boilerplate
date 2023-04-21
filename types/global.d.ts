export type Maybe<T> = T | null | undefined;

export type Account = {
	id: number;
	firstName: string | null;
	lastName: string | null;
	planId: number | null;
	stripeCustomerId: string | null;
	stripeSubscriptionId: string | null;
	currentPeriodEnds: string | null;
};

export type Note = {
	id: number;
	profileId: number;
	title: string;
	content: string;
};
