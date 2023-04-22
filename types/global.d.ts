export type Maybe<T> = T | null | undefined;

export type Account = {
	id: number;
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
