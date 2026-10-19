import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .map(post => ({
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      section: post.data.section,
      tags: post.data.tags ?? [],
    }));
  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
