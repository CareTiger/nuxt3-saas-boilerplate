<template>
    <section>
        <BlogHero class="p-8" />
        <div class="p-8">
            <ContentQuery path="/articles" v-slot="{data}">
                <ul class="border-l border-zinc-200 dark:border-zinc-700 md:pl-6 md:pr-32">
                    <li class="pb-6 " v-for="article in useSortArticlesByDate(data)">
                        <NuxtLink :to="`${article._path}`">
                            <BlogCard :article="article" />
                        </NuxtLink>
                    </li>
                </ul>
            </ContentQuery>
        </div>
    </section>
</template>