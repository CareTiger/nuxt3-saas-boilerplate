import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	const freeTrial = await prisma.plan.upsert({
		where: { name: "Free Trial" },
		update: {},
		create: {
			name: "Free Trial",
			features: ["ADD_NOTES", "EDIT_NOTES", "VIEW_NOTES"],
			max_notes: 10,
			stripe_product_id: "prod_NlWFbSngRFEXDe",
		},
	});
	const basicPlan = await prisma.plan.upsert({
		where: { name: "Basic Plan" },
		update: {},
		create: {
			name: "Basic Plan",
			features: [
				"ADD_NOTES",
				"EDIT_NOTES",
				"VIEW_NOTES",
				"SPECIAL_FEATURE",
			],
			max_notes: 20,
			stripe_product_id: "prod_NkVdizfgRmo4f3",
		},
	});
	const premiumPlan = await prisma.plan.upsert({
		where: { name: "Premium Plan" },
		update: {},
		create: {
			name: "Premium Plan",
			features: [
				"ADD_NOTES",
				"EDIT_NOTES",
				"VIEW_NOTES",
				"SPECIAL_FEATURE",
				"SPECIAL_FEATURE_2",
				"SPECIAL_FEATURE_3",
			],
			max_notes: 200,
			stripe_product_id: "prod_NkVeWzKa9k5053",
		},
	});
	console.log({ freeTrial, basicPlan, premiumPlan });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
