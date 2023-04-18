--
-- 1. CREATE DATABASE TRIGGER FUNCTIONS
-- CREATE KEY FUNCTIONS THAT WILL BE TRIGGERED BY EVENTS
--

-- EXAMPLE FUNCTION
create or replace function hello_world() -- 1
returns text -- 2
language sql -- 3
as $$  -- 4
  select 'hello world';  -- 5
$$; --6

-- TEST FUNCTION
select hello_world(); -- const { data, error } = await supabase.rpc('hello_world')


--
-- 2. CREATE TRIGGERS FOR DATABASE EVENTS
-- CREATE KEY FUNCTIONS THAT WILL BE TRIGGERED BY EVENTS
--
create trigger hello_world_trigger
after insert on auth.users
for each row
execute procedure hello_world();