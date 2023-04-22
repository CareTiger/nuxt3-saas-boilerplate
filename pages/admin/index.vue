<template>
	<div>Admin</div>
</template>
<script setup lang="ts">
definePageMeta({
	title: "Admin",
	middleware: ["auth", "admin"],
});
</script>
