-- nos of users
select * from auth.users

-- how to create/update/delete a new user in profiles table on signup
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