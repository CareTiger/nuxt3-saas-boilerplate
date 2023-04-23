<template>
	<div class="rounded-lg p-2 md:p-6 hover:bg-zinc-100 cursor-pointer">
		<p
			class="text-zinc-400 border-l md:border-none border-zinc-400 pl-4 md:pl-0 mb-4 text-xs"
		>
			{{ useConvertDate(article.updatedAt) }}
		</p>
		<h2 class="font-bold text-zinc-800">
			{{ article.title }}
		</h2>
		<p class="mt-2 text-xs text-zinc-600">
			{{ article.description }}
		</p>
		<p class="mt-1 md:mt-4 text-indigo-600 flex flex-row items-center">
			<span class="text-sm mr-2">Read article</span>
			<span><i class="fa-solid fa-chevron-right"></i></span>
		</p>
	</div>
</template>
<script setup>
defineProps({
	article: {
		type: Object,
		required: true,
	},
});
</script>
