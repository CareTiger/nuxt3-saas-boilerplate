--
-- SET REALTIME POLICIES ON RELEVANT TABLES
--
begin;
-- remove the realtime publication
drop publication if exists supabase_realtime;
-- re-create the publication but don't enable it for any tables
create publication supabase_realtime;
commit;
-- add a table to the publication
alter publication supabase_realtime add table note;

