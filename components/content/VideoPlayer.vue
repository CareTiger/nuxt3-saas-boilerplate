<template>
    <div class="relative w-full pt-[56.25%]">
        <ClientOnly>
            <iframe class="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                :src="`https://www.youtube.com/embed/${props.linkId}`" title="Video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </ClientOnly>
    </div>
</template>

<script setup>
const props = defineProps({
    linkId: {
        type: String,
        required: true,
    },
});
</script>