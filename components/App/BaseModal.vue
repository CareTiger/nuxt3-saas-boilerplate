<template>
	<Teleport to="body">
		<Transition name="modal-outer">
			<div
				id="base-modal"
				v-show="modalActive"
				class="absolute w-full bg-slate-600/75 h-screen top-0 left-0 flex justify-center px-8 z-10"
				@click.self="$emit('close-modal')"
			>
				<Transition name="modal-inner">
					<div
						v-if="modalActive"
						class="p-4 bg-white self-start mt-12 md:mt-32 w-4/5 md:w-3/5 lg:w-2/5 rounded-2xl"
					>
						<p class="w-full flex justify-end">
							<span
								class="text-3xl cursor-pointer"
								@click="$emit('close-modal')"
							>
								<i class="fa-solid fa-xmark"></i>
							</span>
						</p>
						<slot />
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>
<script setup>
defineEmits(["close-modal"]);
defineProps({
	modalActive: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
	transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
	opacity: 0;
}

.modal-inner-enter-active {
	transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
	transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
	opacity: 0;
	transform: scale(0.8);
}

.modal-inner-leave-to {
	transform: scale(0.8);
}
</style>
