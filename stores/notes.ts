import { defineStore, skipHydrate } from "pinia";
import { Note } from "~/types/global";

export const useNotesStore = defineStore("notes", () => {
	// state
	const notes = ref([] as Note[]);
	const persist = ref(true);
	// actions
	async function init(notesData: Note[]) {
		notes.value = notesData;
	}

	// getters

	return {
		notes,
		init,
	};
});
