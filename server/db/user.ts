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
