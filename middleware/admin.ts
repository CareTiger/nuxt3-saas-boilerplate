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
			navigateTo("/user/dashboard", { replace: true });
		} else {
			navigateTo("/admin", { replace: true });
		}
	} catch (error) {
		console.log(error);
	}
});
