<template>
	<div>
		<div class="max-w-md mx-auto border border-slate-200 p-4 w-full">
			<form @submit.prevent="handleOtpLogin">
				<div class="flex flex-col space-y-6">
					<div>
						<label for="emailOTP">Email:</label>
						<input
							type="email"
							id="emailOTP"
							placeholder="Your email"
							v-model="emailOTP"
						/>
					</div>
					<p>
						By signing in, I agree to the
						<NuxtLink to="/app/privacy">Privacy Statement</NuxtLink>
						and
						<NuxtLink to="/app/terms">Terms of Service</NuxtLink>.
					</p>

					<button type="submit" :disabled="loading">
						Sign In using Magic Link
					</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/stores/user";
const loading = ref(false);
const emailOTP = ref("");
const supabaseUser = useSupabaseUser();
const supabaseAuthClient = useSupabaseAuthClient();
const userStore = useUserStore();
const handleOtpLogin = async () => {
	try {
		loading.value = true;
		const { error } = await supabaseAuthClient.auth.signInWithOtp({
			email: emailOTP.value,
		});
		if (error) throw error;
		alert("Check your email for the login link!");
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
