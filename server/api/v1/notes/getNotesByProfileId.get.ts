import { sendError } from "h3";
import { getNotesByProfileId } from "~/server/db/notes";

export default defineEventHandler(async (event) => {
	const payload = getQuery(event);
	if (!payload.profile_id)
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Missing profile id. Can't be null.",
			})
		);
	try {
		const notes = await getNotesByProfileId(Number(payload.profile_id));
		if (!notes) {
			return sendError(
				event,
				createError({
					statusCode: 404,
					message: "Notes can't be found.",
				})
			);
		} else {
			return notes;
		}
	} catch (error) {
		console.log(error);
		return sendError(
			event,
			createError({
				statusCode: 500,
				message: "Error getting notes. Maybe database is unavailble.",
			})
		);
	}
});
