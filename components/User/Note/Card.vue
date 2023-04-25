<template>
	<div>
		<a
			href="#"
			class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
		>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
				{{ note.title }}
			</h5>
			<p class="font-normal text-gray-700">
				{{ note.content }}
			</p>
		</a>
	</div>
</template>
<script setup lang="ts">
defineProps<{
	note: {
		id: number;
		title: string;
		content: string;
	};
}>();
</script>
