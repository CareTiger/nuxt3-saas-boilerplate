<template>
	<div>
		<ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			<li v-for="note in notesStore.notes" :key="note.id">
				<UserNoteCard :note="note" />
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
import { useNotesStore } from "~/stores/notes";

const notesStore = useNotesStore();
</script>
