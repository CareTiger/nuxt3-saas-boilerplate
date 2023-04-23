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
					<AppHeaderAdmin v-if="userStore.role === 'ADMIN'" />
					<AppHeaderUser v-else />
				</div>
			</div>
		</div>
		<!-- Mobile Navbar -->
		<AppBaseModal :modalActive="modalActive" @close-modal="toggleModal">
			<div class="w-full">
				<div
					class="flex flex-row items-center justify-between py-3 border-b border-zinc-300"
				>
					<h2 class="text-sm uppercase">Navigation</h2>
				</div>
				<ul class="">
					<li class="py-3 border-b border-zinc-300">
						<NuxtLink to="/about" @click.prevent="toggleModal"
							>About</NuxtLink
						>
					</li>
					<li class="py-3 border-b border-zinc-300">
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
			<AppHeaderGuest v-if="!user" />
			<span v-if="user"
				><a href="#" @click.prevent="signout()">Sign out</a></span
			>
			<!-- <span v-if="user">{{ user.email }}</span> -->
			<div
				class="md:hidden flex flex-row items-center border border-zinc-100 rounded-full shadow py-2 px-6 cursor-pointer"
				@click="toggleModal"
			>
				<span class="text-zinc-500 text-sm mr-2">Menu</span>
				<span class="text-sm">
					<i class="fa-solid fa-bars-staggered"></i>
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
