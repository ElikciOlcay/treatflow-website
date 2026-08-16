import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/** Öffentlicher TFV2-Fallback, falls Vercel die NEXT_PUBLIC_*-Vars nicht gesetzt hat. */
const TFV2_SUPABASE_URL = 'https://wzenbbpktjjnhjzfplnd.supabase.co';
const TFV2_SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZW5iYnBrdGpqbmhqemZwbG5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNDA0NTgsImV4cCI6MjA1NDcxNjQ1OH0.WoH-dEAErDL2tuKftJfr9l9NnCR18IiJoJ3D0sQP6Xw';

let client: SupabaseClient | null = null;

export function getSupabaseClient() {
    if (client) return client;

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || TFV2_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || TFV2_SUPABASE_ANON_KEY;

    client = createClient(url, anonKey, {
        auth: { persistSession: false },
    });

    return client;
}
