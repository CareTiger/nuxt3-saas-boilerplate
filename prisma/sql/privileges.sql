--
-- FIX PRISMA SCHEMA DRIFTS/ FORCE RESETS
-- THIS SCRIPT IS A SOLVE FOR ANY SCHEMA DRIFTS CAUSED BY PRISMA. 
-- READ MORE HERE - https://supabase.com/docs/guides/integrations/prisma#troubleshooting
-- 

-- schema public
grant usage on schema public to postgres, anon, authenticated, service_role;

grant all privileges on all tables in schema public to postgres, anon, authenticated, service_role;
grant all privileges on all functions in schema public to postgres, anon, authenticated, service_role;
grant all privileges on all sequences in schema public to postgres, anon, authenticated, service_role;

alter default privileges in schema public grant all on tables to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on functions to postgres, anon, authenticated, service_role;
alter default privileges in schema public grant all on sequences to postgres, anon, authenticated, service_role;

-- schema saas
grant usage on schema saas to postgres, anon, authenticated, service_role;

grant all privileges on all tables in schema saas to postgres, anon, authenticated, service_role;
grant all privileges on all functions in schema saas to postgres, anon, authenticated, service_role;
grant all privileges on all sequences in schema saas to postgres, anon, authenticated, service_role;

alter default privileges in schema saas grant all on tables to postgres, anon, authenticated, service_role;
alter default privileges in schema saas grant all on functions to postgres, anon, authenticated, service_role;
alter default privileges in schema saas grant all on sequences to postgres, anon, authenticated, service_role;
