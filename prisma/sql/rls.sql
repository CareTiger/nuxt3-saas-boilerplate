--
-- RESET RLS POLICIES ON RELEVANT TABLES
-- ENABLE RLS ON ALL TABLES AND CREATE RLS POLICIES FOR EACH TABLE
--
-- table public.account
alter table public.account
enable row level security;

-- table public.note
alter table public.note
enable row level security;

-- CREATE POLICY "Enable CRUD on public.note for users based on user_uid"
-- ON public.note
-- FOR ALL USING (
--   auth.uid()::text = user_uid
-- );

-- table public.profile
alter table public.profile
enable row level security;

-- CREATE POLICY "Enable CRUD on public.profile for users based on user_uid"
-- ON public.profile
-- FOR ALL USING (
--   auth.uid()::text = user_uid
-- );

-- table public.plan
alter table public.plan
enable row level security;