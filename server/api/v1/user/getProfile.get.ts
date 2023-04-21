import { sendError } from "h3";
import { getProfile } from "~/server/db/user";

export default defineEventHandler(async (event) => {
	const payload = getQuery(event);
	if (!payload.userUid)
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Missing user uid. Can't be null.",
			})
		);
	try {
		const user = await getProfile(String(payload.userUid));
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
