import rss from '@astrojs/rss';
import type { AstroConfig } from 'astro';
import { getCollection } from 'astro:content';
import sanitizeHTML from 'sanitize-html';
import MarkDownIt from 'markdown-it';

const parser = new MarkDownIt();

export async function get(context: AstroConfig) {
  const blog = await getCollection('blog');

  return rss({
    title: 'The Sndwch blog',
    description: 'All sandwich news, All the time.',
    site: context.site!,
    items: blog.map((post) => {
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: `/blog/${post.slug}`,
        content: sanitizeHTML(parser.render(post.body)),
      };
    }),
  })
}

