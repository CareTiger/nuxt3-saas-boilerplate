<script setup lang="ts">
const user = useSupabaseUser();
watchEffect(() => {
	if (user.value) {
		navigateTo("/dashboard", { replace: true });
	}
});
</script>
<template>
	<div>
		<AppLandingHero />
	</div>
</template>
