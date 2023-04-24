<template>
	<div class="flex flex-col space-y-6">
		<div class="max-w-md mx-auto border border-gray-200 p-4 w-full">
			<h2>
				Enter the email address associated with your account, and we’ll
				email you a link to reset your password.
			</h2>
			<form class="mt-6" @submit.prevent="handleForgotPassword">
				<div>
					<label for="email">Email:</label>
					<input
						class="inputField"
						type="email"
						id="email"
						placeholder="Your email"
						v-model="email"
					/>
				</div>

				<button class="mt-6" type="submit" :disabled="loading">
					Send reset link
				</button>
			</form>
		</div>
	</div>
</template>
<script setup lang="ts">
const client = useSupabaseAuthClient();
const loading = ref(false);
const email = ref("");
const handleForgotPassword = async () => {
	// TODO the redirect URL is not working
	try {
		loading.value = true;
		// const { error } = await client.auth.resetPasswordForEmail(email.value, {
		// 	redirectTo: "http://localhost:3000/auth/reset",
		// });
		const { error } = await client.auth.resetPasswordForEmail(email.value);
		if (error) throw error;
		alert("Check your email for the login link!");
	} catch (error) {
		alert(error);
	} finally {
		loading.value = false;
	}
};
</script>
