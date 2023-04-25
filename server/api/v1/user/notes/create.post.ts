import { sendError } from "h3";
import { createNote } from "~/server/db/notes";

export default defineEventHandler(async (event) => {
	const payload = await readBody(event);
	try {
		// create a note for the user
		const note = await createNote(
			Number(payload.profile_id),
			payload.title,
			payload.content
		);
	} catch (error) {
		console.log(error);
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Something went wrong.",
			})
		);
	}
	return payload;
});
