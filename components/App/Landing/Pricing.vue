<template>
	<div>
		<pre><code>{{ appStore.plans }}</code></pre>
	</div>
</template>
<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
</script>
