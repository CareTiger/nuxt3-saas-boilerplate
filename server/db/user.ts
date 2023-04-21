import { prisma } from ".";

export const getProfile = async (user_uid: string) => {
	return await prisma.profile.findFirst({
		where: {
			user_uid,
		},
		select: {
			id: true,
			email: true,
			role: true,
			account: {
				select: {
					id: true,
					first_name: true,
					last_name: true,
					plan_id: true,
					current_period_ends: true,
					stripe_customer_id: true,
					stripe_subscription_id: true,
				},
			},
			notes: {
				select: {
					id: true,
					profileId: true,
					title: true,
					content: true,
				},
			},
		},
	});
};
