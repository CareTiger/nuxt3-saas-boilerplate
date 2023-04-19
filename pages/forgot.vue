<template>
	<div>
		<h2>
			Enter the email address associated with your account, and we’ll
			email you a link to reset your password.
		</h2>
		<form @submit.prevent="handleForgotPassword">
			<label for="email">Email:</label>
			<input
				class="inputField"
				type="email"
				id="email"
				placeholder="Your email"
				v-model="email"
			/>

			<button type="submit" :disabled="loading">Send reset link</button>
		</form>
	</div>
</template>
<script setup lang="ts">
const client = useSupabaseAuthClient();
const loading = ref(false);
const email = ref("");
const handleForgotPassword = async () => {
	try {
		loading.value = true;
		const { error } = await client.auth.resetPasswordForEmail(email.value, {
			redirectTo: "http://localhost:3000/reset",
		});
		if (error) throw error;
		alert("Check your email for the login link!");
	} catch (error) {
		alert(error);
	} finally {
		loading.value = false;
	}
};
</script>
