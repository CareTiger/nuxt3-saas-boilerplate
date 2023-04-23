<script setup lang="ts">
import { useUserStore } from "~/stores/user";
const user = useSupabaseUser();
const userStore = useUserStore();

watchEffect(() => {
	if (user.value) {
		// TODO - This is not working
		console.log("INDEX.VUE", userStore.role);
		if (userStore.role === "ADMIN") {
			navigateTo("/admin", { replace: true });
		} else {
			navigateTo("/user/dashboard", { replace: true });
		}
	}
});
</script>
<template>
	<div>
		<AppLandingHero />
		<AppLandingPricing />
	</div>
</template>
