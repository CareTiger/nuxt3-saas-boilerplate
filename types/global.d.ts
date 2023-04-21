export type Maybe<T> = T | null | undefined;

export interface User {
	id: number;
	email: string;
	role: string;
	notes: Note[];
}

export interface Note {
	id: number;
	profileId: number;
	title: string;
	content: string;
}
