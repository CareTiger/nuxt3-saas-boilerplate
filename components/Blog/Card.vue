<template>
    <div class="rounded-lg p-2 md:p-6 hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer">
        <p class="text-zinc-400 border-l md:border-none border-zinc-400 pl-4 md:pl-0 mb-4 text-xs">{{
        useConvertDate(article.updatedAt)
        }}</p>
        <h2 class="text-base font-bold text-zinc-800 dark:text-zinc-200">{{ article.title }}</h2>
        <p class="mt-2 text-xs text-zinc-600 dark:text-zinc-500">{{ article.description }}</p>
        <p class="mt-1 md:mt-4 text-green-600 flex flex-row items-center">
            <span class="text-sm">Read article</span>
            <span class="material-icons-round">
                chevron_right
            </span>
        </p>
    </div>
</template>
<script setup>
defineProps({
    article: {
        type: Object,
        required: true
    }
});
</script>