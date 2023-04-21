--
-- THIS FILE HAS THE BARE MINIMUS SCRIPTS TO RESET RLS POLICIES, SCHEMA, FUNCTIONS, TRIGGERS AND VIEWS
-- IT DOES NOT INCLUDE THE DATA
-- TO RESTORE THE DATA, USE THE BACKUP FILE IN THE BACKUP FOLDER
--

--
-- 1. FIX PRISMA SCHEMA DRIFTS/ FORCE RESETS
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
-- 2. FUNCTIONS AND TRIGGERS ON USER SIGNUP/UPDATE/DELETE IN AUTH TABLE
-- 
-- create/update/delete a new user in profiles and account table on signup/update/delete in auth table
-- inserts a row into public.profile when a new user is created
create or replace function public.handle_new_user() returns trigger as $$ begin

-- insert a row into public.profile with the user_uid and email
insert into public."profile" (user_uid, email)
values (new.id::text, new.email);
-- insert a row into public.account with the profile_id
-- insert into public."account" (profileId)
-- values (new.id::number);

return new;
end;
$$ language plpgsql security definer;

-- trigger the handle_new_user() function every time a user is created
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after
insert on auth.users for each row execute procedure public.handle_new_user();

-- TODO test this function
-- UPDATE a row in public."profile" when the email is updated
create or replace function public.handle_updated_user() returns trigger as $$ begin
update public."profile"
set email = new.email
where user_uid = new.id::text;
return new;
end;
$$ language plpgsql security definer;
-- trigger the function every time a user is updated
drop trigger if exists on_auth_user_updated on auth.users;
create trigger on_auth_user_updated
after
update on auth.users for each row execute procedure public.handle_updated_user();

-- TODO test this function
-- -- DELETE a row from public."profile" when the user is deleted
create or replace function public.handle_deleted_user() returns trigger as $$ begin
delete from public."profile"
where user_uid = old.id::text;
return old;
end;
$$ language plpgsql security definer;
-- trigger the function every time a user is deleted
drop trigger if exists on_auth_user_deleted on auth.users;
create trigger on_auth_user_deleted
after delete on auth.users for each row execute procedure public.handle_deleted_user();

--
-- 3. RESET RLS POLICIES ON RELEVANT TABLES
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