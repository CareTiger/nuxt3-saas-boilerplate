<template>
	<div class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl text-center">
				<h2 class="text-base font-semibold leading-7 text-indigo-600">
					Pricing
				</h2>
				<p
					class="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
				>
					Pricing plans for everyone
				</p>
			</div>
			<p
				class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600"
			>
				Distinctio et nulla eum soluta et neque labore quibusdam. Saepe
				et quasi iusto modi velit ut non voluptas in. Explicabo id ut
				laborum.
			</p>
			<div
				class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				<div
					class="flex flex-col justify-between rounded-3xl bg-white m-2 p-8 ring-1 ring-slate-200 xl:p-10 lg:mt-8"
					:class="{
						'ring-2 ring-indigo-600': plan.featured === true,
					}"
					v-for="plan in appStore.plans"
				>
					<div>
						<div class="flex items-center justify-between gap-x-4">
							<h3
								id="tier-freelancer"
								class="text-lg font-semibold leading-8 text-slate-900"
							>
								{{ plan.name }}
							</h3>
						</div>
						<p class="mt-4 text-sm leading-6 text-slate-600">
							{{ plan.description }}
						</p>
						<p class="mt-6 flex items-baseline gap-x-1">
							<span
								class="text-5xl font-bold tracking-tight text-slate-900"
								>$ {{ plan.price }}</span
							>
							<span
								class="text-sm font-semibold leading-6 text-slate-600"
								>/month</span
							>
						</p>
						<ul
							role="list"
							class="mt-8 space-y-3 text-sm leading-6 text-slate-600"
						>
							<li
								class="flex flex-row items-center gap-x-3"
								v-for="feature in plan.features"
							>
								<i
									class="fa-solid fa-check text-indigo-600"
								></i>
								{{ feature }}
							</li>
						</ul>
					</div>
					<a
						href="#"
						aria-describedby="tier-freelancer"
						class="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
						:class="{
							'bg-indigo-600 text-white': plan.featured === true,
						}"
						>Buy plan</a
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useAppStore } from "@/stores/app";
const appStore = useAppStore();
</script>
