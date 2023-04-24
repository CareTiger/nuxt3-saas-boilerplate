<template>
	<div>
		<input
			class="w-full rounded-lg focus:border-indigo-500 focus:ring-indigo-500"
			type="search"
			name="search"
			id="emsearchail"
			placeholder="Search articles"
			v-model="searchQuery"
		/>
		<ul
			v-if="articles.length > 0"
			class="space-y-4 rounded-lg z-10 py-4 px-6 bg-zinc-100"
		>
			<li
				class="flex flex-row items-center justify-between"
				v-for="article in articles"
			>
				<div class="flex flex-row space-x-2">
					<NuxtLink
						class="text-sm text-indigo-500"
						:to="article._path"
					>
						{{ article.title }}
					</NuxtLink>
				</div>
			</li>
		</ul>
	</div>
</template>
<script setup>
const searchQuery = ref("");
let articles = ref([]);

watchEffect(async () => {
	if (!searchQuery.value) {
		return;
	}
	const { data: results } = await useAsyncData("", () =>
		queryContent("articles")
			.where({ description: { $contains: searchQuery.value } })
			.limit(6)
			.find()
	);
	articles.value = results.value;
});
</script>
