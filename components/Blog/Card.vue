<template>
	<div class="rounded-lg hover:bg-slate-100 cursor-pointer">
		<p class="text-slate-400 text-xs">
			{{ useConvertDate(article.updatedAt) }}
		</p>
		<h2 class="font-bold text-slate-800">
			{{ article.title }}
		</h2>
		<p class="mt-2 text-xs text-slate-600">
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
