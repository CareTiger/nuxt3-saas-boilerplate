--
-- STORAGE BUCKET CREATION AND POLICIES
-- THIS WORKS BUT,
-- TODO how to drop and recreate the bucket
--

-- seed storage bucket and folders

-- if exists delete bucket saas;

-- create bucket saas;
insert into storage.buckets (id, name) values ('saas', 'saas');

-- create policies for the newly created buckets
-- Allow public access to any files in the "saas" bucket
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'saas' );

-- Allow a user full access their own files
create policy "Individual user insert"
on storage.objects for INSERT
with check ( auth.uid() = owner );    
