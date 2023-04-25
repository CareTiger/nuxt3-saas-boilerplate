<template>
	<div
		class="flex flex-col min-h-screen w-full mx-auto sm:w-4/5 md:max-w-7xl bg-white text-slate-800"
	>
		<header>
			<nav>
				<AppHeaderContainer />
			</nav>
		</header>
		<main class="flex-1">
			<NuxtPage />
		</main>
		<ModalsContainer />
		<footer>
			<AppFooter />
		</footer>
	</div>
</template>
<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
</script>
