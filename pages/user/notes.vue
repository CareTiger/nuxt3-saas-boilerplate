<template>
	<div>
		<UserNoteCreate @noteCreated="reRender" />
		<UserNoteAll />
	</div>
</template>
<script setup lang="ts">
import { useNotesStore } from "~/stores/notes";
const notesStore = useNotesStore();
definePageMeta({
	title: "My Notes",
	middleware: ["auth"],
});

async function reRender() {
	await notesStore.getFreshNotes();
}
</script>
