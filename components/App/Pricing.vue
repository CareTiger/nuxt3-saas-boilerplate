<template>
	<div>
		<pre><code>{{ plans }}</code></pre>
	</div>
</template>
<script setup lang="ts">
const { data: plans, error } = useFetch("api/v1/app/getPlans", {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
	},
});
</script>
