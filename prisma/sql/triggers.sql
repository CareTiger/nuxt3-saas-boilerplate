--
-- FUNCTIONS AND TRIGGERS ON USER SIGNUP/UPDATE/DELETE IN AUTH TABLE
-- 

--
-- saas.profile
-- create/update/delete a new user in profile table on signup/update/delete in auth table
--
-- inserts a row into saas.profile when a new user is created with the user_uid and email
create or replace function saas.handle_new_user() returns trigger as $$ begin
insert into saas."profile" (user_uid, email)
values (new.id::text, new.email);
return new;
end;
$$ language plpgsql security definer;
-- trigger the handle_new_user() function every time a user is created
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after
insert on auth.users for each row execute procedure saas.handle_new_user();

-- TODO test this function
-- UPDATE a row in saas."profile" when the email is updated
create or replace function saas.handle_updated_user() returns trigger as $$ begin
update saas."profile"
set email = new.email
where user_uid = new.id::text;
return new;
end;
$$ language plpgsql security definer;
-- trigger the function every time a user is updated
drop trigger if exists on_auth_user_updated on auth.users;
create trigger on_auth_user_updated
after
update on auth.users for each row execute procedure saas.handle_updated_user();

-- TODO test this function
-- -- DELETE a row from saas."profile" when the user is deleted
create or replace function saas.handle_deleted_user() returns trigger as $$ begin
delete from saas."profile"
where user_uid = old.id::text;
return old;
end;
$$ language plpgsql security definer;
-- trigger the function every time a user is deleted
drop trigger if exists on_auth_user_deleted on auth.users;
create trigger on_auth_user_deleted
after delete on auth.users for each row execute procedure saas.handle_deleted_user();

--
-- saas.account
-- create/update/delete a new user entry in account table on signup/update/delete in auth table
--
-- insert a row into saas.account with the profile_id
create or replace function saas.handle_new_user_account() returns trigger as $$ begin
insert into saas."account" (profile_id)
values (new.id);
return new;
end;
$$ language plpgsql security definer;

-- trigger the handle_new_user_account() function every time a user is created
drop trigger if exists new_account_on_profile_created on saas.profile;
create trigger new_account_on_profile_created
after
insert on saas.profile for each row execute procedure saas.handle_new_user_account();

