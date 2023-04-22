// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.182.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Headers": "authorization, x-client-info, apikey",
};

serve(async (req) => {
	// read a text file from storage and print its contents
	// This is needed if you're planning to invoke your function from a browser.
	if (req.method === "OPTIONS") {
		return new Response("ok", { headers: corsHeaders });
	}

	try {
		// Create a Supabase client with the Auth context of the logged in user.
		const supabaseClient = createClient(
			Deno.env.get("SUPABASE_URL"),
			Deno.env.get("SUPABASE_KEY"),
			// Create client with Auth context of the user that called the function.
			// This way your row-level-security (RLS) policies are applied.
			{
				global: {
					headers: {
						Authorization: req.headers.get("Authorization")!,
					},
				},
			}
		);

		const { data, error } = await supabaseClient.storage
			.from("saas")
			.download("Error.jpg");
		if (error) throw error;

		// file contents are returned as a blob, we can convert it to utf-8 text by calling text() method.
		const contents = await data.text();

		// prints out the contents of the file
		// console.log(contents);

		return new Response(JSON.stringify({ contents }), {
			headers: { ...corsHeaders, "Content-Type": "application/json" },
			status: 200,
		});
	} catch (error) {
		console.error(error);

		return new Response(JSON.stringify({ error: error.message }), {
			headers: { ...corsHeaders, "Content-Type": "application/json" },
			status: 400,
		});
	}
});
// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
