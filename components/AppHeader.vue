<template>
	<div>
		<div class="flex flex-row justify-between">
			<div>
				<span><NuxtLink to="/">Nuxt 3 Boilerplate</NuxtLink></span>
			</div>
			<div class="flex space-x-4">
				<span><NuxtLink to="/pricing">Pricing</NuxtLink></span>
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
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUserStore } from "../stores/user";
import { useNotesStore } from "../stores/notes";
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const userStore = useUserStore();
const notesStore = useNotesStore();

onMounted(async () => {
	await userStore.init();
});

async function signout() {
	await client.auth.signOut();
	if (userStore) {
		userStore.signout();
	}
	navigateTo("/signin", { replace: true });
}
</script>
