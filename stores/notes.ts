import { defineStore } from "pinia";

export const useNotesStore = defineStore({
	id: "notes-store",
	state: () => ({
		notes: [],
	}),
	actions: {
		init() {
			console.log("notes store init");
		},
	},
	getters: {},
});
