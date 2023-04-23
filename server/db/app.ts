import { prisma } from ".";

export const getPlans = async () => {
	return await prisma.plan.findMany({
		select: {
			id: true,
			name: true,
			features: true,
			max_notes: true,
			description: true,
			audience: true,
			featured: true,
			price: true,
		},
		orderBy: {
			id: "asc",
		},
	});
};
