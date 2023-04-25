import Toast, { PluginOptions, POSITION } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
	// You can set your default options here
	transition: {
		enter: "fade-enter-active",
		leave: "Vue-Toastification__bounce-leave-active",
		move: "fade-move",
	},
	position: POSITION.BOTTOM_RIGHT,
	pauseOnHover: true,
};

export default defineNuxtPlugin((NuxtApp) => {
	NuxtApp.vueApp.use(Toast, options);
});
