--
-- THIS FILE HAS THE BARE MINIMUS SCRIPTS TO RECREATE THE SAAS-BOILERPLATE DATABASE RLS POLICIES, SCHEMA, FUNCTIONS, TRIGGERS AND VIEWS
-- IT DOES NOT INCLUDE THE DATA
-- TO RESTORE THE DATA, USE THE BACKUP FILE IN THE BACKUP FOLDER
--

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
-- 2. FUNCTIONS AND TRIGGERS ON USER SIGNUP/UPDATE/DELETE IN AUTH TABLE
-- 
-- create/update/delete a new user in profiles table on signup
-- CREATE inserts a row into public."profile"
create or replace function public.handle_new_user() returns trigger as $$ begin
insert into public."profile" (supabase_uid, email)
values (new.id, new.email);
return new;
end;
$$ language plpgsql security definer;
-- trigger the function every time a user is created
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after
insert on auth.users for each row execute procedure public.handle_new_user();
-- UPDATE a row in public."profile" when the email is updated
create or replace function public.handle_updated_user() returns trigger as $$ begin
update public."profile"
set email = new.email
where supabase_uid = new.id::text;
return new;
end;
$$ language plpgsql security definer;
-- trigger the function every time a user is updated
drop trigger if exists on_auth_user_updated on auth.users;
create trigger on_auth_user_updated
after
update on auth.users for each row execute procedure public.handle_updated_user();

-- -- DELETE a row from public."profile" when the user is deleted
create or replace function public.handle_deleted_user() returns trigger as $$ begin
delete from public."profile"
where supabase_uid = old.id::text;
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

-- table public.profile
alter table public.profile
enable row level security;

-- table public.notifications
alter table public.membership
enable row level security;

CREATE POLICY  "user can select/insert/update/delete their own notfications." ON notifications
FOR ALL
USING (text(auth.uid()) = user_id);
