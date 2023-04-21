--
-- FUNCTIONS AND TRIGGERS ON USER SIGNUP/UPDATE/DELETE IN AUTH TABLE
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
