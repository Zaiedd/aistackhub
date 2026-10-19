import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  const site = 'https://aistackhub.pages.dev';
  const items = posts.map(post => `
    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${site}/posts/${post.slug}/</link>
      <guid>${site}/posts/${post.slug}/</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
      <category>${escapeXml(post.data.section)}</category>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AIStackHub</title>
    <link>${site}</link>
    <description>Hands-on reviews and research on AI tools for students, developers, and business.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
