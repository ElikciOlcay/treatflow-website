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
    title_en?: string | null;
    summary_en?: string | null;
    content_en?: string | null;
    link_label_en?: string | null;
};

const SELECT_FIELDS =
    'id, title, summary, content, category, image_url, link_url, link_label, published_at, title_en, summary_en, content_en, link_label_en';

export function productUpdateSlug(update: Pick<ProductUpdate, 'id' | 'image_url'>) {
    const fromImage = update.image_url.match(/\/images\/product-updates\/([^/.]+)/)?.[1];
    return fromImage || update.id;
}

export async function getPublishedProductUpdates(): Promise<ProductUpdate[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
        .from('product_updates')
        .select(SELECT_FIELDS)
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (!error) {
        return (data || []) as ProductUpdate[];
    }

    const fallback = await supabase
        .from('product_updates')
        .select('id, title, summary, content, category, image_url, link_url, link_label, published_at')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (fallback.error) {
        throw new Error(`product_updates: ${error.message}`);
    }

    return (fallback.data || []) as ProductUpdate[];
}

export async function getProductUpdateBySlug(slug: string): Promise<ProductUpdate | null> {
    const updates = await getPublishedProductUpdates();
    return updates.find((update) => productUpdateSlug(update) === slug) || null;
}

export function localizeProductUpdate(update: ProductUpdate, lang: 'de' | 'en'): ProductUpdate {
    if (lang !== 'en') return update;
    return {
        ...update,
        title: update.title_en?.trim() || update.title,
        summary: update.summary_en?.trim() || update.summary,
        content: update.content_en?.trim() || update.content,
        link_label: update.link_label_en?.trim() || update.link_label,
    };
}

export function formatPublishedDate(isoDate: string, locale: 'de-DE' | 'en-GB' = 'de-DE') {
    return new Date(isoDate).toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export function categoryLabel(category: string | null, lang: 'de' | 'en') {
    const value = (category || '').toLowerCase();
    if (lang === 'en') {
        if (value.includes('fix')) return 'Fix';
        if (value.includes('verbesser')) return 'Improvement';
        return 'New';
    }
    return category || 'Neu';
}
