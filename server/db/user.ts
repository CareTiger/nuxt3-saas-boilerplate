import { prisma } from ".";

export const getRole = async (user_uid: string) => {
	return await prisma.profile.findFirst({
		where: {
			user_uid,
		},
		select: {
			role: true,
		},
	});
};

export const getProfile = async (user_uid: string) => {
	return await prisma.profile.findFirst({
		where: {
			user_uid,
		},
		select: {
			id: true,
			email: true,
			display_name: true,
			role: true,
			account: {
				select: {
					id: true,
					plan_id: true,
					current_period_ends: true,
					stripe_customer_id: true,
					stripe_subscription_id: true,
				},
			},
			notes: {
				select: {
					id: true,
					profile_id: true,
					title: true,
					content: true,
				},
			},
		},
	});
};
