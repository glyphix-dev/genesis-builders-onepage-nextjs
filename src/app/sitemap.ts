import { client } from "@/sanity/lib/client";
import queries from "@/sanity/queries";
import { Page } from '@/types/types.sanity';

export type SitemapLink = {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}

const getURL = (page: Page) => {
  return {
    url: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || ""}/${page.slug?.current || ""} `,
    lastModified: page._updatedAt || page.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  } as SitemapLink;
}

export default async function sitemap(): Promise<SitemapLink[]> {
  const links: SitemapLink[] = [];
  const content = await client.fetch(queries.sitemap.links, {}, {
    next: {
      tags: ['sitemap'],
      revalidate: 60 * 60 * 24, // 24 hours
    }
  });
  Object.keys(content).forEach((key) => {
    content[key].forEach((page: Page) => {
      links.push(getURL(page));
    });
  });
  return links;
}