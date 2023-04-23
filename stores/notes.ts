import { defineStore, skipHydrate } from "pinia";
import { Note } from "~/types/global";

export const useNotesStore = defineStore("notes", () => {
	// state
	const notes = ref([] as Note[]);

	// actions
	async function init(notes: Note[]): Promise<void> {
		notes = notes;
	}

	// getters

	return {
		notes,
		init,
	};
});
