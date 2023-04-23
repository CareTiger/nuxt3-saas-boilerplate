<template>
	<div class="px-8 py-6 flex flex-row items-center justify-between">
		<NuxtLink to="/">
			<img
				class="h-12 w-12 rounded-full object-cover"
				src="/ven.jpg"
				alt="avatar"
			/>
		</NuxtLink>
		<div class="hidden md:block">
			<div class="flex space-x-4">
				<div v-if="user">
					<AppHeaderUser v-if="userStore.role === 'USER'" />
					<AppHeaderAdmin v-if="userStore.role === 'ADMIN'" />
				</div>
			</div>
		</div>
		<!-- Mobile Navbar -->
		<AppBaseModal :modalActive="modalActive" @close-modal="toggleModal">
			<div class="w-full">
				<div
					class="flex flex-row items-center justify-between py-3 border-b border-zinc-300 dark:border-zinc-500"
				>
					<h2 class="text-sm uppercase">Navigation</h2>
				</div>
				<ul class="">
					<li
						class="py-3 border-b border-zinc-300 dark:border-zinc-500"
					>
						<NuxtLink to="/about" @click.prevent="toggleModal"
							>About</NuxtLink
						>
					</li>
					<li
						class="py-3 border-b border-zinc-300 dark:border-zinc-500"
					>
						<NuxtLink to="/articles" @click.prevent="toggleModal"
							>Articles</NuxtLink
						>
					</li>
					<li class="pt-3 pb-4">
						<NuxtLink to="/projects" @click.prevent="toggleModal"
							>Projects</NuxtLink
						>
					</li>
				</ul>
			</div>
		</AppBaseModal>
		<div class="flex items-center space-x-2">
			<div
				class="md:hidden flex flex-row items-center border border-zinc-100 dark:border-zinc-600 rounded-full shadow py-2 px-6 cursor-pointer"
				@click="toggleModal"
			>
				<span class="text-zinc-500 dark:text-white text-sm">Menu</span>
				<span class="material-icons-round text-sm dark:text-white">
					expand_more
				</span>
			</div>
		</div>
	</div>
</template>
<script setup>
const modalActive = ref(false);
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
const toggleModal = () => {
	modalActive.value = !modalActive.value;
};
</script>
