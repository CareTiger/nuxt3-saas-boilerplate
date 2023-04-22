export default defineNuxtRouteMiddleware(async (to) => {
	const user = useSupabaseUser();
	console.log("Getting role");
	try {
		console.log(user.value?.id);
		const { data } = await useFetch("/api/v1/user/getRole", {
			method: "GET",
			query: {
				user_id: user.value?.id,
			},
		});
		console.log(data.value);
	} catch (error) {
		console.log(error);
	}

	// if (userRole.role !== "ADMIN") {
	// 	return "/dashboard";
	// }
});
