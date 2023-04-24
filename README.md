# Nuxt 3 (SAAS) Boilerplate

## Not Production Ready

Please don't hitch your wagon to this star just yet...

## Tech Stack

-   Nuxt 3
-   Supabase local environment (Auth including OAuth + Postgresql instance)
-   Prisma (Schema management + Strongly typed client)
-   Pinia (State Store)
-   Stripe (Payments including Webhook integration)
-   Typescript

## Features

### User Management

-   [x] User authentication via Supabase including Social Signon (e.g. google, github) Email/Password and Magic Link
-   [x] Full list of available [providers](https://supabase.com/docs/guides/auth#providers)
-   [x] User roles and permissions (admin, regular user, etc. roles defined in the [Prisma Schema](/prisma/schema.prisma))
-   [x] User Email captured on initial login
-   [x] reset password
-   [ ] Initial plan and plan period controled via config to allow either a trial plan or a 'Community plan' for initial users
-   [ ] Edit Account Name/bio etc from Account Page

### Schema and DB Management

-   [x] Prisma based Schema Management
-   [x] Supabase integration for DB
-   [x] DB Seed Script to setup plan information including Plan and Stripe Product information

### Config Management and Env integration

-   [x] [Config](/nuxt.config.ts) for Stripe Keys
-   [x] [Env](/.env_example) keys for Supabase and Stripe
-   [ ] Config Switches for free trial - If you want a 'free trial period' set initialPlanName to an appropriate plan name in the DB and initialPlanActiveMonths to a positive value. If you don't want a free trial, set initialPlanName to an appropriate 'No Plan' plan in the DB and set the initialPlanActiveMonths to -1.

### Multi-Modal State Management (route rules)

-   [ ] SPA type pages (e.g. [Dashboard](/pages/dashboard.vue)) - postgresql(supabase) -> Prisma -> Service Layer for Business Logic -> Pinia -> UI
-   [ ] SSR type pages (e.g. [Note](/pages/notes/[note_id].vue)) - postgresql(supabase) -> Prisma -> Service Layer for Business Logic -> UI
-   [ ] Static pages (e.g. [Blog](/articles/**)) - nuxt/content -> UI

### Blog

-   [x] Blog with CRUD functionality using nuxt/content
-   [ ] Social media optimization and sharing buttons (vue-social-sharing)
-   [ ] SEO Optimization - nuxt-seo-kit (https://github.com/harlan-zw/nuxt-seo-kit)
-   [ ] Image optimization (https://nuxt.com/modules/image)
-   [ ] robots.txt (https://nuxt.com/modules/robots)

### Tailwind CSS & Icons & Fonts & Forms (UnoCSS is the future)

-   [x] setup Tailwind CSS
-   [x] Responsive Navbar
-   [x] Responsive footer
-   [x] @fortawesome/fontawesome-free for icons
-   [ ] Formkit
-   [x] Google fonts

### Modals and toasts

-   [ ] Modals using vue-final-modal
-   [ ] Toasts using vue-toastification

### Plans and Pricing

-   [ ] Manage multiple Plans each with specific Feature flags and Plan limits
-   [ ] Plan features copied to Accounts upon successfull subscription
-   [ ] Loose coupling between Plan and Account Features to allow ad-hoc account tweaks without creating custom plans
-   [ ] Pricing page appropriately reacts to users with/without account and current plan.
-   [ ] Plan features and Limits available in an object structure in Server methods and with method annotations or similar
-   [ ] Pricing page enables appropriate styling for 'featured' plan and shows prices for all plans

### Stripe (Payments) Integration

-   [] Each plan is configured with Stripe Product ID so that multiple Stripe Prices can be created for each plan but subscriptions (via Webhook) will still activate the correct plan.
-   [] Support basic (customer.subscription) flows for Subscription payments via Webhook
-   [] Support additional Stripe flows for things like failed payments, imminent subscription expiry (send email?) etc.....

### Support

-   [ ] Help desk support (ticketing system, live chat, etc.)
-   [ ] Knowledge base with FAQs and tutorials

### Look and Feel, Design System and Customisation

-   [x] Very Crap default UI
-   [x] Not Crap UI
-   [ ] Integrated Design system (Tailwind)
-   [ ] Branding options (logo, color scheme, etc.)

### Demo Software (Notes)

-   [ ] Simple Text based Notes functionality
-   [ ] Read only Notes Dashboard
-   [ ] SSR Rendered (SEO Optimised) [Note](/pages/notes/[note_id].vue) Display
-   [ ] Max Notes limit property on Plan
-   [ ] Max Notes enforced
-   [ ] Add, Delete notes on Dashboard

### Mobile App

-   [ ] Ionic App Demo integrating with API endpoints, Auth etc
-   [ ] Mobile-friendly web interface.

### Testing

-   [ ] Unit tests for server functions using vitest/playwright
-   [ ] Integration tests around subscription scenarios
-   [ ] unlighthouse tests for page performance

## Externals Setup

Things you gotta do that aren't code (and are therefore not very interesting)

### Env

Copy the [.env_example](/.env_example) file to create [.env](/.env)
Note) This file is for development convenience, is .gitignored by default and should _not_ be added to source control

### Supabase

This solution uses Supabase for Auth and to provide a DB. In addition to Magic Link and email/password login via Supabase, it also supports Google OAuth via Supabase.

1. Go to [Supabase](https://supabase.com/) and 'Start your Project'
2. Setup your org and project (Free tier is fine to start)
3. Update the project's email template
4. Choose an OAuth provider. I have chosen Google using these [Instructions](https://supabase.com/docs/guides/auth/social-login/auth-google) for the purposes of demonstration but they all should work.
5. Go to Project Settings -> API and copy Project URL and Project API Key to SUPABASE_URL and SUPABASE_KEY settings respectively in your [.env](/.env) file
6. Go to Project Settings -> Database -> Connection String -> URI and copy the uri value into the DATABASE_URL setting in your [.env](/.env) file, remembering to replace `[YOUR-PASSWORD]` with the password you provided when you setup the project.

### Stripe

This solution uses Stripe for Subscription payments.

1. Go to [Stripe](https://stripe.com) and setup your business (Free Tier is fine to start)
2. Create 3 products ('Community plan', 'Basic Plan' and 'Premium Plan') each with a single price and note the Product ID's and Price ID's
3. Edit the [seed.ts](/prisma/seed.ts) file and replace the stripe_product_id values with the Product ID's)

```typescript
    create: {
      name: 'Team Plan',
      .....
      stripe_product_id: '[Your Product ID from Stripe]'
    },
```

4. Edit the Pricing [pricing](/pages/pricing.vue) page and put your Price ID's from 2) into the appropriate hidden `price_id` form fields...

```html
<input type="hidden" name="price_id" value="[Your Price ID from Stripe]" />
```

### Setup Database (Prisma)

This solution uses Prisma to both manage changes and connect to the Postgresql database provided by Supabase. Your Supabase DB will be empty by default so you need to hydrate the schema and re-generate the local prisma client.

```
npx prisma db push
npx prisma generate
npm install @prisma/client --save-dev
npx prisma db seed
```

...you should now have a a Plan table with 3 rows and a bunch of empty tables in your Supabase DB

## Developement Setup

### Dependencies

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

### Webhook Forwarding

This makes sure that you can debug subscription workflows locally

```bash
stripe listen --forward-to localhost:3000/webhook
```

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
