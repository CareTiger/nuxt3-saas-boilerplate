<template>
	<article class="p-8">
		<div class="flex flex-col md:grid md:grid-cols-12">
			<img
				class="md:col-span-6 h-80 md:h-96 w-full object-cover"
				:src="data.img"
				alt=""
			/>
			<div class="md:col-span-6 md:grid md:place-items-center">
				<div class="pt-8 md:pt-0 md:mx-4 space-y-2 md:space-y-6">
					<p class="uppercase text-xs text-indigo-500">
						{{ data.category }}
					</p>
					<h1 class="text-xl md:text-3xl">{{ data.title }}</h1>
				</div>
			</div>
		</div>
		<div
			class="mt-10 md:mt-20 mx-auto flex flex-col md:grid md:grid-cols-12 md:gap-10"
		>
			<div class="md:col-start-3 md:col-span-8 space-y-4">
				<p class="text-sm text-slate-500">
					{{ useConvertDate(data.updatedAt) }}
				</p>
				<div class="flex flex-row items-center space-x-4">
					<span class="uppercase text-xs text-slate-500">Share</span>
					<SVGTwitter class="text-xs" />
					<SVGLinkedIn class="text-xs" />
				</div>
				<div>
					<ContentDoc
						class="pt-4 prose prose-headings:no-underline"
					/>
				</div>
			</div>
		</div>
	</article>
</template>
<script setup>
const route = useRoute();
const data = await queryContent(route.fullPath).findOne();
useServerSeoMeta({
	ogTitle: data.title,
	ogDescription: data.description,
	ogImage: data.img,
	ogUrl: "https://saas-boilerplate-kappa.vercel.app/" + data.url,
	ogType: "article",
	ogSiteName: "Nuxt SAAS Boilerplate",
	twitterCard: "summary_large_image",
	twitterSite: "https://saas-boilerplate-kappa.vercel.app/" + data.url,
	twitterCreator: "@vadlamaniven",
	twitterTitle: data.title,
	twitterDescription: data.description,
	twitterImage: data.img,
	linkedinTitle: data.title,
	linkedinDescription: data.description,
	linkedinImage: data.img,
	linkedinUrl: "https://saas-boilerplate-kappa.vercel.app/" + data.url,
	instagramTitle: data.title,
	instagramDescription: data.description,
	instagramImage: data.img,
	instagramUrl: "https://saas-boilerplate-kappa.vercel.app/" + data.url,
});
</script>
