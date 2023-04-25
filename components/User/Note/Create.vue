<template>
	<div class="isolate bg-white px-6 py-16 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2
				class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
			>
				Notes
			</h2>
			<p class="mt-2 text-lg leading-8 text-slate-600">
				Aute magna irure deserunt veniam aliqua magna enim voluptate.
			</p>
		</div>
		<form
			@submit.prevent="handleSubmit"
			class="mx-auto mt-8 max-w-xl border border-slate-200 rounded-xl p-4"
		>
			<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<div class="sm:col-span-2">
					<label
						for="Title"
						class="block text-sm font-semibold leading-6 text-slate-900"
						>Title</label
					>
					<div class="mt-2.5">
						<input
							type="text"
							name="Title"
							id="Title"
							autocomplete="organization"
							class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							v-model="title"
						/>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label
						for="content"
						class="block text-sm font-semibold leading-6 text-slate-900"
						>Content</label
					>
					<div class="mt-2.5">
						<textarea
							name="content"
							id="content"
							rows="4"
							class="block w-full rounded-md border-0 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							v-model="content"
						></textarea>
					</div>
				</div>
			</div>
			<div class="mt-6">
				<button
					type="submit"
					class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Add note
				</button>
			</div>
		</form>
	</div>
</template>
<script setup lang="ts">
import { useToast } from "vue-toastification";
import { useUserStore } from "~/stores/user";

const title = ref("");
const content = ref("");
const userStore = useUserStore();

// emitter for the form. let the parent know to rerender the notes
const emits = defineEmits(["onSubmit", "noteCreated"]);
const toast = useToast();

const handleSubmit = async () => {
	try {
		const data = await $fetch("/api/v1/user/notes/create", {
			key: "create-note",
			method: "POST",
			body: JSON.stringify({
				profile_id: userStore.id,
				title: title.value,
				content: content.value,
			}),
		});
		emits("noteCreated", true);
		toast.success("Added to Bookmarks", {
			timeout: 2000,
		});
	} catch (error) {
		console.error("Oops! there was an error", error);
		toast.error("Something went wrong", {
			timeout: 2000,
		});
	}
};
</script>
