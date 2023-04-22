--
-- FUNCTIONS AND TRIGGERS ON USER SIGNUP/UPDATE/DELETE IN AUTH TABLE
-- 

--
-- PUBLIC.PROFILE
-- create/update/delete a new user in profile table on signup/update/delete in auth table
--
-- inserts a row into public.profile when a new user is created with the user_uid and email
create or replace function public.handle_new_user() returns trigger as $$ begin
insert into public."profile" (user_uid, email)
values (new.id::text, new.email);
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
-- PUBLIC.ACCOUNT
-- create/update/delete a new user entry in account table on signup/update/delete in auth table
--
-- insert a row into public.account with the profile_id
create or replace function public.handle_new_user_account() returns trigger as $$ begin
insert into public."account" (profile_id)
values (new.id);
return new;
end;
$$ language plpgsql security definer;

-- trigger the handle_new_user_account() function every time a user is created
drop trigger if exists new_account_on_profile_created on public.profile;
create trigger new_account_on_profile_created
after
insert on public.profile for each row execute procedure public.handle_new_user_account();

