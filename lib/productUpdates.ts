import { getSupabaseClient } from './supabase';

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

export function productUpdateSlug(update: Pick<ProductUpdate, 'id' | 'image_url'>) {
    const fromImage = update.image_url.match(/\/images\/product-updates\/([^/.]+)/)?.[1];
    return fromImage || update.id;
}

export async function getPublishedProductUpdates(): Promise<ProductUpdate[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
        .from('product_updates')
        .select('id, title, summary, content, category, image_url, link_url, link_label, published_at')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (error) {
        throw new Error(`product_updates: ${error.message}`);
    }

    return (data || []) as ProductUpdate[];
}

export async function getProductUpdateBySlug(slug: string): Promise<ProductUpdate | null> {
    const updates = await getPublishedProductUpdates();
    return updates.find((update) => productUpdateSlug(update) === slug) || null;
}

export function formatPublishedDate(isoDate: string) {
    return new Date(isoDate).toLocaleDateString('de-DE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}
