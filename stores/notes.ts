import { defineStore, skipHydrate } from "pinia";
import { Note } from "~/types/global";
import { useUserStore } from "./user";

export const useNotesStore = defineStore("notes", () => {
	// state
	const notes = ref([] as Note[]);
	const persist = ref(true);

	// actions
	async function init(notesData: Note[]) {
		notes.value = notesData;
	}

	// getters
	async function getFreshNotes(): Promise<Note[]> {
		const userStore = useUserStore();
		try {
			const data = await $fetch("/api/v1/user/notes/all", {
				key: "notes",
				method: "GET",
				params: {
					profile_id: userStore.id,
				},
				headers: {
					"Content-Type": "application/json",
				},
			});
			notes.value = useConvertKeysToCamelCase(data);
		} catch (error) {
			console.log(error);
		}

		return notes.value;
	}
	return {
		getFreshNotes,
		notes,
		init,
	};
});
