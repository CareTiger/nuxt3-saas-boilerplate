import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((NuxtApp) => {
	NuxtApp.vueApp.use(Toast, {
		transition: {
			enter: "fade-enter-active",
			leave: "Vue-Toastification__bounce-leave-active",
			move: "fade-move",
		},
	});
});
