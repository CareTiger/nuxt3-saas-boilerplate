<template>
    <div>
        <input
            class="w-full md:max-w-xs rounded-lg dark:bg-zinc-700 focus:border-green-500 focus:ring-green-500 dark:focus:bg-zinc-700 dark:focus:text-zinc-100"
            type="search" name="search" id="emsearchail" placeholder="Search articles" v-model="searchQuery">
        <ul v-if="articles.length > 0" class="space-y-4 rounded-lg z-10 py-4 px-6 bg-zinc-100 dark:bg-zinc-600">
            <li class="flex flex-row items-center justify-between" v-for="article in articles">
                <div class="flex flex-row space-x-2">
                    <NuxtLink class="text-sm text-green-500" :to="article._path">
                        {{ article.title }}
                    </NuxtLink>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup>
const searchQuery = ref('');
let articles = ref([]);

watchEffect(async() => {
    if(!searchQuery.value) {
        return;
    }
    const {data: results} = await useAsyncData('', () => queryContent('articles').where({description: {$contains: searchQuery.value}}).limit(6).find())
    articles.value = results.value;
});
</script>