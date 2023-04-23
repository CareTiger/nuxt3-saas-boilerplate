<template>
	<div class="flex flex-col h-screen w-full">
		<AppHeaderContainer />
		<NuxtPage class="flex-1" />
		<AppFooter />
	</div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
</script>
