<template>
	<div class="flex flex-col space-y-6">
		<div class="max-w-md mx-auto border border-slate-200 p-4 w-full">
			<form @submit.prevent="handleStandardLogin">
				<div class="flex flex-col space-y-6">
					<div class="w-full">
						<label for="email">Email:</label>
						<input
							type="email"
							id="email"
							placeholder="Your email"
							v-model="email"
						/>
					</div>
					<div>
						<label for="password">Password:</label>
						<input
							type="password"
							id="password"
							placeholder="Password"
							v-model="password"
						/>
					</div>
					<p>
						By signing in, I agree to the
						<NuxtLink to="/app/privacy">Privacy Statement</NuxtLink>
						and
						<NuxtLink to="/app/terms">Terms of Service</NuxtLink>.
					</p>
					<p>
						<NuxtLink to="/auth/forgot"
							>Forgot your password?</NuxtLink
						>
					</p>
					<button type="submit" :disabled="loading">Sign In</button>
				</div>
			</form>
		</div>

		<!-- <div class="max-w-md mx-auto border border-slate-200 p-4 w-full">
			<p>or sign in with</p>

			<button
				@click="supabaseAuthClient.auth.signInWithOAuth({ provider: 'github' })"
			>
				Github
			</button>
		</div> -->
	</div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/stores/user";
const supabaseUser = useSupabaseUser();
const supabaseAuthClient = useSupabaseAuthClient();
const userStore = useUserStore();
const loading = ref(false);
const email = ref("");
const password = ref("");

const handleStandardLogin = async () => {
	try {
		loading.value = true;
		const { error } = await supabaseAuthClient.auth.signInWithPassword({
			email: email.value,
			password: password.value,
		});
		if (error) throw error;
	} catch (error) {
		alert(error);
	} finally {
		loading.value = false;
	}
};
watchEffect(async () => {
	if (supabaseUser.value) {
		await userStore.init();
		if (userStore.role === "ADMIN") {
			navigateTo("/admin", { replace: true });
		} else {
			navigateTo("/user/dashboard", { replace: true });
		}
	}
});
</script>
