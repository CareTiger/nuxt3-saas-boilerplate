export default defineNuxtRouteMiddleware(async (to) => {
	const user = useSupabaseUser();

	try {
		const { data, error } = await useFetch("/api/v1/user/getRole", {
			method: "GET",
			query: {
				user_uid: user.value?.id,
			},
		});
		if (data.value?.role !== "ADMIN") {
			return "/user/dashboard";
		}
	} catch (error) {
		console.log(error);
	}
});
