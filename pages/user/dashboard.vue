<template>
	<div>
		<h1>Dashboard</h1>
	</div>
</template>
<script setup lang="ts">
definePageMeta({
	title: "Dashboard",
	middleware: ["auth"],
});
</script>
