import { getCollection, type CollectionEntry } from 'astro:content';

export function estimateReadingTime(text: string): string {
  const words = text.match(/\S+/g)?.length || 0;
  const minutes = Math.ceil(words / 200) || 1;
  return `${minutes} min read`;
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export async function getPublishedBlogPosts(): Promise<CollectionEntry<'blog'>[]> {
  try {
    const posts = await getCollection('blog', ({ data }) => !data.draft);
    return (posts || []).sort(
      (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
    );
  } catch {
    return [];
  }
}
