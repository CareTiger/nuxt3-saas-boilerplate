import { sendError } from "h3";
import Stripe from "stripe";

const stripe = new Stripe(String(process.env.STRIPE_SECRET_KEY), {
	apiVersion: "2022-11-15",
});

export default defineEventHandler(async (event) => {
	const payload = readBody(event);
	stripe.products
		.create({
			name: "Starter Subscription",
			description: "$12/Month subscription",
		})
		.then((product) => {
			stripe.prices
				.create({
					unit_amount: 1200,
					currency: "usd",
					recurring: {
						interval: "month",
					},
					product: product.id,
				})
				.then((price) => {
					console.log(
						"Success! Here is your starter subscription product id: " +
							product.id
					);
					console.log(
						"Success! Here is your premium subscription price id: " +
							price.id
					);
				});
		});
	return payload;
});
