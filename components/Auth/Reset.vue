<template>
	<div class="flex flex-col space-y-6">
		<div class="max-w-md mx-auto border border-gray-200 p-4 w-full">
			<form
				class="flex flex-col space-y-6"
				@submit.prevent="handleResetPassword"
			>
				<div>
					<label for="password">Password:</label>
					<input
						class="inputField"
						type="password"
						id="password"
						placeholder="Password"
						v-model="password"
					/>
				</div>
				<div>
					<label for="confirm_password">Confirm Password:</label>
					<input
						class="inputField"
						type="password"
						id="convirm_password"
						placeholder="Confirm Password"
						v-model="confirmPassword"
					/>
				</div>
				<button
					type="submit"
					:disabled="loading || confirmPassword !== password"
				>
					Reset Password
				</button>
			</form>
		</div>
	</div>
</template>
<script setup lang="ts">
const client = useSupabaseAuthClient();

const loading = ref(false);
const password = ref("");
const confirmPassword = ref("");

const handleResetPassword = async () => {
	try {
		loading.value = true;
		const { error } = await client.auth.updateUser({
			password: password.value,
		});
		if (error) throw error;
		alert("All set!");
	} catch (error) {
		alert(error);
	} finally {
		loading.value = false;
	}
};
</script>
