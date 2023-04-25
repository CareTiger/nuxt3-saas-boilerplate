<template>
	<div class="flex flex-col space-y-6">
		<div class="max-w-md mx-auto border border-slate-200 p-4 w-full">
			<form
				class="flex flex-col space-y-6"
				@submit.prevent="handleStandardSignup"
			>
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

				<p>
					By proceeding, I agree to the
					<NuxtLink to="/app/privacy">Privacy Statement</NuxtLink> and
					<NuxtLink to="/app/terms">Terms of Service</NuxtLink>.
				</p>

				<button
					type="submit"
					:disabled="loading || confirmPassword !== password"
				>
					Sign Up
				</button>
			</form>
		</div>
	</div>
</template>
<script setup lang="ts">
const supabaseAuthClient = useSupabaseAuthClient();

const loading = ref(false);
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleStandardSignup = async () => {
	try {
		loading.value = true;
		const { data, error } = await supabaseAuthClient.auth.signUp({
			email: email.value,
			password: password.value,
		});
		if (error) {
			throw error;
		} else {
			alert("Check your email for the login link!");
		}
	} catch (error) {
		alert(error);
	} finally {
		loading.value = false;
	}
};
</script>
