--
-- RESET RLS POLICIES ON RELEVANT TABLES
-- ENABLE RLS ON ALL TABLES AND CREATE RLS POLICIES FOR EACH TABLE
--
-- table saas.account
alter table saas.account
enable row level security;

-- table saas.note
alter table saas.note
enable row level security;

-- CREATE POLICY "Enable CRUD on saas.note for users based on user_uid"
-- ON saas.note
-- FOR ALL USING (
--   auth.uid()::text = user_uid
-- );

-- table saas.profile
alter table saas.profile
enable row level security;

-- CREATE POLICY "Enable CRUD on saas.profile for users based on user_uid"
-- ON saas.profile
-- FOR ALL USING (
--   auth.uid()::text = user_uid
-- );

-- table saas.plan
alter table saas.plan
enable row level security;