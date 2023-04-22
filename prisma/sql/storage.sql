--
-- STORAGE BUCKET CREATION AND POLICIES
-- TODO how to drop and recreate the bucket
--
-- if exists delete bucket saas;
-- if exists (select 1 from storage.buckets where id = 'saas') then
--   delete from storage.buckets where id = 'saas';
-- end if;

-- -- create bucket saas;
insert into storage.buckets (id, name) values ('saas', 'saas');

-- create policies for the newly created buckets
-- Allow public access to any files in the "saas" bucket
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'saas' );

-- Allow select access to any files in the "saas" bucket
CREATE POLICY "Give users select access to own folder" ON storage.objects FOR SELECT TO public USING (bucket_id = 'saas' AND auth.uid()::text = (storage.foldername(name))[1]);  

-- Allow insert access to any files in the "saas" bucket
CREATE POLICY "Give users insert access to own folder" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = 'saas' AND auth.uid()::text = (storage.foldername(name))[1]);