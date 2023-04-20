import { sendError } from "h3";
import { getProfile } from "~/server/db/user";

export default defineEventHandler(async (event) => {
	const payload = getQuery(event);
	return await getProfile(String(payload.user_uid));
});
