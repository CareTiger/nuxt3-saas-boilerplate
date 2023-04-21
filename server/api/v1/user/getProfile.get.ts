import { sendError } from "h3";
import { getProfile } from "~/server/db/user";

export default defineEventHandler(async (event) => {
	const payload = getQuery(event);
	try {
		const user = await getProfile(String(payload.user_uid));
		if (user === null || undefined) {
			return sendError(
				event,
				createError({
					statusCode: 404,
					message: "User not found",
				})
			);
		} else {
			return user;
		}
	} catch (error) {
		return sendError(
			event,
			createError({
				statusCode: 500,
				message: "Error getting profile. Maybe database is unavailble.",
			})
		);
	}
});
