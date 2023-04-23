import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	const freeTrial = await prisma.plan.upsert({
		where: { name: "Community Plan" },
		update: {
			featured: false,
			price: 0,
		},
		create: {
			name: "Community Plan",
			features: ["ADD_NOTES", "EDIT_NOTES", "VIEW_NOTES"],
			max_notes: 10,
			stripe_product_id: "prod_NlWFbSngRFEXDe",
			description:
				"This is a free trial plan. You can use it for 30 days. After that, you will be automatically downgraded to the Community Plan.", // TODO - change this
			audience: "Everyone",
			featured: false,
			price: 0,
		},
	});
	const basicPlan = await prisma.plan.upsert({
		where: { name: "Basic Plan" },
		update: {
			featured: true,
			price: 10,
		},
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
			description:
				"This is a free trial plan. You can use it for 30 days. After that, you will be automatically downgraded to the Community Plan.",
			audience: "Startups",
			featured: true,
			price: 10,
		},
	});
	const premiumPlan = await prisma.plan.upsert({
		where: { name: "Premium Plan" },
		update: {
			featured: false,
			price: 99,
		},
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
			description:
				"This is a free trial plan. You can use it for 30 days. After that, you will be automatically downgraded to the Community Plan.",
			audience: "Enterprise",
			featured: false,
			price: 99,
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
