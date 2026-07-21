import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type ProductUpdate = {
  id: string;
  title: string;
  summary: string | null;
  content: string;
  category: string | null;
  image_url: string;
  link_url: string | null;
  link_label: string | null;
  published_at: string;
};

const APP_ORIGIN = "https://app.treatflow.io";

let client: SupabaseClient | null = null;

function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  if (!client) {
    client = createClient(url, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}

/** Relative App-Pfade auf die App-Domain mappen; absolute URLs unverändert lassen. */
export function resolveProductUpdateImageUrl(imageUrl: string): string {
  if (!imageUrl) return "";
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }
  // Bevorzugt lokale Website-Kopie, Fallback App
  if (imageUrl.startsWith("/")) {
    return imageUrl;
  }
  return `${APP_ORIGIN}/${imageUrl.replace(/^\//, "")}`;
}

export async function fetchPublishedProductUpdates(): Promise<ProductUpdate[]> {
  const supabase = getSupabase();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("product_updates")
    .select(
      "id, title, summary, content, category, image_url, link_url, link_label, published_at"
    )
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(50);

  if (error) {
    return [];
  }

  return (data || []) as ProductUpdate[];
}
