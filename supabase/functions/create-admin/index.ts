import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    // Check if admin already exists
    const { data: existingUsers } = await supabase.auth.admin.listUsers({ perPage: 100 });
    const adminExists = existingUsers?.users?.some(u => u.email === "admin@gmail.com");

    if (adminExists) {
      return new Response(JSON.stringify({ message: "Admin account already exists" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Create admin user with confirmed email
    const { data, error } = await supabase.auth.admin.createUser({
      email: "admin@gmail.com",
      password: "Techlyzone1122",
      email_confirm: true,
    });

    if (error) throw error;

    return new Response(JSON.stringify({ message: "Admin account created successfully", userId: data.user.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
