import { prisma } from ".";

export const getPlans = async () => {
	return await prisma.plan.findMany({
		select: {
			id: true,
			name: true,
			features: true,
			max_notes: true,
			// TODO add pricing
		},
	});
};