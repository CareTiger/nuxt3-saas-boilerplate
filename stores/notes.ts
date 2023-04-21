import { defineStore } from "pinia";
import { Note } from "~/types/global";

export const useNotesStore = defineStore({
	id: "notes-store",
	state: () => ({
		notes: [] as Note[],
	}),
	actions: {
		init(notes: Note[]) {
			this.notes = notes;
		},
	},
	getters: {},
});
