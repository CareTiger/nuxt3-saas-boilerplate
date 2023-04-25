// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	//loads nuxt devtools
	debug: true,

	app: {
		head: {
			title: "Nuxt SAAS Boilerplate",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					hid: "description",
					name: "description",
					content: "Nuxt App",
				},
			],
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{
					rel: "stylesheet",
					href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
				},
			],
		},
		pageTransition: { name: "page", mode: "out-in" },
	},

	typescript: {
		shim: false,
	},

	modules: [
		"@nuxtjs/supabase",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		"@nuxtjs/tailwindcss",
		"@nuxt/content",
	],
	routeRules: {
		// Static page generated on-demand once
		"/articles/**": { static: true },
		// Render these routes with SPA
		"/admin/**": { ssr: false },
		// Add cors headers
		"/api/v1/**": { cors: true },
	},

	runtimeConfig: {
		stripeSecretKey: process.env.STRIPE_SECRET_KEY,
		stripeEndpointSecret: process.env.STRIPE_ENDPOINT_SECRET,
		stripeCallbackUrl: process.env.STRIPE_CALLBACK_URL,
		subscriptionGraceDays: 3,
		initialPlanName: "Free Trial",
		initialPlanActiveMonths: 1,
		public: {
			debugMode: true,
			siteRootUrl: "http://localhost:3000",
		},
	},
	tailwindcss: {
		cssPath: "~/assets/css/tailwind.css",
	},
	css: ["vue-final-modal/style.css"],
	devtools: {
		// Enable devtools (default: true)
		enabled: true,
		// VS Code Server options
		vscode: {},
		// ...other options
	},
});
