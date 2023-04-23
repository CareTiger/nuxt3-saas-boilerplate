<script setup lang="ts">
const user = useSupabaseUser();
watchEffect(() => {
	if (user.value) {
		navigateTo("/user/dashboard", { replace: true });
	}
});
</script>
<template>
	<div>
		<AppLandingHero />
		<AppLandingPricing />
	</div>
</template>
