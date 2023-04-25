<template>
	<div>
		<div class="max-w-md mx-auto border border-slate-200 p-4 w-full">
			<p>or sign up with</p>

			<button
				@click="
					supabaseAuthClient.auth.signInWithOAuth({
						provider: 'github',
					})
				"
			>
				Github
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
const supabaseAuthClient = useSupabaseAuthClient();
</script>
