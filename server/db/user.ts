import { prisma } from ".";

export const getProfile = async (user_uid: string) => {
	return await prisma.profile.findFirst({
		where: {
			user_uid,
		},
		select: {
			user_uid: true,
			email: true,
			notes: {
				select: {
					id: true,
					note: true,
				},
			},
		},
	});
};
