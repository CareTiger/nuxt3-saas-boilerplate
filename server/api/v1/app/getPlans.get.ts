import { sendError } from "h3";
import { getPlans } from "~/server/db/app";

export default defineEventHandler(async (event) => {
	try {
		const plans = await getPlans();
		return plans;
	} catch (error) {
		sendError(
			event,
			createError({ statusCode: 500, message: "Error getting plans." })
		);
	}
});
