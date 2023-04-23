<template>
    <article class="p-8">
        <div class="flex flex-col md:grid md:grid-cols-12">
            <img class="md:col-span-6 h-80 md:h-96 w-full object-cover" :src="data.img" alt="">
            <div class="md:col-span-6 md:grid md:place-items-center">
                <div class="pt-8 md:pt-0 md:mx-4 space-y-2 md:space-y-6">
                    <p class="uppercase text-xs text-green-500">{{ data.category }}</p>
                    <h1 class="text-xl md:text-3xl">{{ data.title }}</h1>
                </div>
            </div>
        </div>
        <div class="mt-10 md:mt-20 mx-auto flex flex-col md:grid md:grid-cols-12 md:gap-10">
            <div class="md:col-start-3 md:col-span-8 space-y-4">
                <p class="text-sm text-zinc-500">{{ useConvertDate(data.updatedAt) }}
                </p>
                <div class="flex flex-row items-center space-x-4">
                    <span class="uppercase text-xs text-zinc-500">Share</span>
                    <ShareNetwork network="twitter"
                        :url="`https://sampyl-personal-portfolio.vercel.app${route.fullPath}`" :title="data.title"
                        :description="data.description" :hashtags="data.hashtags">
                        <SVGTwitter class="text-xs" />
                    </ShareNetwork>
                    <ShareNetwork network="LinkedIn"
                        :url="`https://sampyl-personal-portfolio.vercel.app${route.fullPath}`" :title="data.title"
                        :description="data.description" :hashtags="data.hashtags">
                        <SVGLinkedIn />
                    </ShareNetwork>
                </div>
                <div>
                    <ContentDoc class="pt-4 prose prose-headings:no-underline dark:prose-invert" />
                </div>
            </div>
        </div>
    </article>
</template>
<script setup>
const route = useRoute();
const data = await queryContent(route.fullPath).findOne();
useHead({
    title: data.title,
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: data.description
        },
        {
            hid: 'og:title',
            property: 'og:title',
            content: data.title
        },
        {
            hid: 'og:description',
            property: 'og:description',
            content: data.description
        },
        {
            hid: 'og:image',
            property: 'og:image',
            content: data.img, width: 1200, height: 630
        },
        {
            hid: 'og:url',
            property: 'og:url',
            content: `https://sampyl-personal-portfolio.vercel.app${route.fullPath}`
        },
        {
            hid: 'og:type',
            property: 'og:type',
            content: 'article'
        },
        {
            hid: 'og:site_name',
            property: 'og:site_name',
            content: 'Sampyl'
        },
        {
            hid: 'twitter:url',
            name: 'twitter:url',
            content: `https://sampyl-personal-portfolio.vercel.app${route.fullPath}`
        },          
        {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: data.title
        },
        {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: data.description
        },
        {
            hid: 'twitter:image',
            name: 'twitter:image',
            content: data.img, width: 1200, height: 630
        },
        {
            hid: 'twitter:creator',
            name: 'twitter:creator',
            content: '@sampyl'
        },
        {
            hid: 'twitter:site',
            name: 'twitter:site',
            content: '@sampyl'
        },
        {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image'
        }
    ]
});
</script>