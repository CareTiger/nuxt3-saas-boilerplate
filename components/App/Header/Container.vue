<template>
	<div>
		<div class="flex flex-row justify-between">
			<div>
				<span><NuxtLink to="/">SAAS Boilerplate</NuxtLink></span>
			</div>
			<div class="flex space-x-4">
				<div v-if="user">
					<AppHeaderUser v-if="userStore.role === 'USER'" />
					<AppHeaderAdmin v-if="userStore.role === 'ADMIN'" />
				</div>
			</div>
			<div class="flex flex-row space-x-4">
				<AppHeaderGuest v-if="!user" />
				<span v-if="user"
					><a href="#" @click.prevent="signout()">Sign out</a></span
				>
				<span v-if="user">{{ user.email }}</span>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/stores/user";
import { useAppStore } from "@/stores/app";
import { useNotesStore } from "~/stores/notes";
const client = useSupabaseAuthClient();
const user = useSupabaseUser();
const userStore = useUserStore();
const appStore = useAppStore();
const notesStore = useNotesStore();

onMounted(async () => {
	await userStore.init();
	await appStore.init();
});

async function signout() {
	await client.auth.signOut();
	appStore.$reset;
	if (userStore) {
		userStore.$reset;
		notesStore.$reset;
	}
	navigateTo("/auth/signin", { replace: true });
}
</script>
