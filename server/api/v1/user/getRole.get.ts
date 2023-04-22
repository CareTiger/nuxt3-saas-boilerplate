import { sendError } from "h3";
import { getRole } from "~/server/db/user";

export default defineEventHandler(async (event) => {
	const payload = getQuery(event);
	console.log(payload);
	if (!payload.user_uid)
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Missing user uid. Can't be null.",
			})
		);
	try {
		const user = await getRole(String(payload.user_uid));
		// TODO - if uid is not found, return 404 with a message
		if (!user) {
			return sendError(
				event,
				createError({
					statusCode: 404,
					message: "User can't be found.",
				})
			);
		} else {
			return user;
		}
	} catch (error) {
		console.log(error);
		return sendError(
			event,
			createError({
				statusCode: 500,
				message: "Error getting profile. Maybe database is unavailble.",
			})
		);
	}
});
