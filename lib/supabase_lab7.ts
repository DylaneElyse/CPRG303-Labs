import { createClient } from "@supabase/supabase-js";


const supabase = createClient (
    process.env.EXPO_PUBLIC_SUPABASE_LAB7_URL,
    process.env.EXPO_PUBLIC_SUPABASE_LAB7_KEY
);

export default supabase;