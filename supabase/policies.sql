--
-- 1. FIX PRISMA SCHEMA DRIFTS
-- THIS SCRIPT IS A SOLVE FOR ANY SCHEMA DRIFTS CAUSED BY PRISMA. 
-- READ MORE HERE - https://supabase.com/docs/guides/integrations/prisma#troubleshooting
-- 
grant usage on schema public to postgres, anon, authenticated, service_role;

grant all privileges on all tables in schema public to postgres, anon, authenticated, service_role;
grant all privileges on all functions in schema public to postgres, anon, authenticated, service_role;
grant all privileges on all sequences in schema public to postgres, anon, authenticated, service_role;

alter default privileges in schema public grant all on tables to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on functions to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on sequences to postgres, anon, authenticated, service_role;

--
-- 2. SET RLS POLICIES ON RELEVANT TABLES
-- ENABLE RLS ON ALL TABLES AND CREATE RLS POLICIES FOR EACH TABLE
--

-- table public.user
alter table public.user
enable row level security;

-- table public.notifications
alter table public.notifications
enable row level security;

CREATE POLICY  "user can select/insert/update/delete their own notfications." ON notifications
FOR ALL
USING (text(auth.uid()) = user_id);

-- table public.todos
alter table public.todos
enable row level security;

CREATE POLICY  "user can select/insert/update/delete their own todos ONLY." ON todos
FOR ALL
USING (text(auth.uid()) = user_id);

-- table public.media
alter table public.media
enable row level security;

CREATE POLICY  "user can select/insert/update/delete their own media." ON media
FOR ALL
USING (text(auth.uid()) = user_id);


--
-- 3. SET REALTIME POLICIES ON RELEVANT TABLES
--
begin;
-- remove the realtime publication
drop publication if exists supabase_realtime;
-- re-create the publication but don't enable it for any tables
create publication supabase_realtime;
commit;
-- add a table to the publication
alter publication supabase_realtime add table notifications;


--
-- 4. STORAGE BUCKET CREATION AND POLICIES
--

-- seed storage bucket and folders
insert into storage.buckets (id, name) values ('sampyl', 'sampyl');

-- create policies for the newly created buckets
-- Allow public access to any files in the "sampyl" bucket
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'sampyl' );

-- Allow a user full access their own files
create policy "Individual user insert"
on storage.objects for INSERT
with check ( auth.uid() = owner );    
