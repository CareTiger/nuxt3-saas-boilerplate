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
		<h3>Nuxt 3 Saas Boilerplate - To the Moon!</h3>
		<div>
			<span v-if="!user"
				><NuxtLink to="/">Nuxt 3 Boilerplate</NuxtLink
				>&nbsp;|&nbsp;</span
			>
			<span><NuxtLink to="/pricing">Pricing</NuxtLink></span>
			<span v-if="user"
				>&nbsp;|&nbsp;<NuxtLink to="/dashboard"
					>Dashboard</NuxtLink
				></span
			>
			<span v-if="user"
				>&nbsp;|&nbsp;<NuxtLink to="/account">Account</NuxtLink></span
			>
			<span v-if="!user"
				>&nbsp;|&nbsp;<NuxtLink to="/signin">Sign In</NuxtLink></span
			>
			<span v-if="!user"
				>&nbsp;|&nbsp;<NuxtLink to="/signup">Sign Up</NuxtLink></span
			>
			<span v-if="!user"
				>&nbsp;|&nbsp;<NuxtLink to="/forgot"
					>Forgot password</NuxtLink
				></span
			>
			<span v-if="user"
				>&nbsp;|&nbsp;<a href="#" @click.prevent="signout()"
					>Sign out</a
				></span
			>
			<span v-if="user">&nbsp;|&nbsp;logged in as: {{ user.email }}</span>
		</div>
		<hr />
	</div>
</template>
