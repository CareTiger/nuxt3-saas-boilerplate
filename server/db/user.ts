import { prisma } from ".";

export const getProfile = async (user_uid: string) => {
	return await prisma.profile.findFirst({
		where: {
			user_uid,
		},
		include: {
			notes: {
				select: {
					id: true,
					title: true,
					content: true,
				},
			},
		},
	});
};
