<template>
	<div>
		<div class="flex flex-row justify-between">
			<div>
				<span><NuxtLink to="/">Nuxt 3 Boilerplate</NuxtLink></span>
			</div>
			<div class="flex space-x-4">
				<span v-if="user"
					><NuxtLink to="/user/dashboard">Dashboard</NuxtLink></span
				>
				<span v-if="user"
					><NuxtLink to="/user/account">Account</NuxtLink></span
				>
				<span v-if="user"
					><NuxtLink to="/user/notes">Notes</NuxtLink></span
				>
			</div>
			<div class="flex flex-row space-x-4">
				<span v-if="!user"
					><NuxtLink to="/auth/signin">Sign In</NuxtLink></span
				>
				<span v-if="!user"
					><NuxtLink to="/auth/signup">Sign Up</NuxtLink></span
				>
				<span v-if="user"
					><a href="#" @click.prevent="signout()">Sign out</a></span
				>
				<!-- <span v-if="user">logged in as: {{ user.email }}</span> -->
			</div>
		</div>
		<hr />
	</div>
</template>
<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const userStore = useUserStore();
const appStore = useAppStore();
onMounted(async () => {
	await userStore.init();
	await appStore.init();
});

async function signout() {
	await client.auth.signOut();
	if (userStore) {
		userStore.signout();
	}
	navigateTo("/auth/signin", { replace: true });
}
</script>
