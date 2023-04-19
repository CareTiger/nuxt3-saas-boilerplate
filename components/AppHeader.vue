<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAccountStore } from "../stores/account";

const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const accountStore = useAccountStore();

onMounted(async () => {
	await accountStore.init();
});

async function signout() {
	await client.auth.signOut();
	if (accountStore) {
		accountStore.signout();
	}
	navigateTo("/", { replace: true });
}
</script>

<template>
	<div>
		<div class="flex flex-row justify-between">
			<div>
				<span><NuxtLink to="/">Nuxt 3 Boilerplate</NuxtLink></span>
			</div>
			<div class="flex space-x-4">
				<span
					><NuxtLink v-if="!user" to="/pricing"
						>Pricing</NuxtLink
					></span
				>
				<span v-if="user"
					><NuxtLink to="/dashboard">Dashboard</NuxtLink></span
				>
				<span v-if="user"
					><NuxtLink to="/account">Account</NuxtLink></span
				>
				<span v-if="!user"
					><NuxtLink to="/signin">Sign In</NuxtLink></span
				>
				<span v-if="!user"
					><NuxtLink to="/signup">Sign Up</NuxtLink></span
				>
				<span v-if="user"
					><a href="#" @click.prevent="signout()">Sign out</a></span
				>
			</div>
			<div>
				<span v-if="user">logged in as: {{ user.email }}</span>
			</div>
		</div>
		<hr />
	</div>
</template>
