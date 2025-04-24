import { client } from "@/sanity/lib/client";
import queries from "@/sanity/queries";
import { Page } from '@/types/types.sanity';

export type SitemapLink = {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}

const getURL = (page: Page, path: string = '') => {
  return {
    url: `${process.env.NODE_ENV === "production" ? process.env.VERCEL_URL || process.env.NEXT_PUBLIC_BASE_URL : "http://localhost:3000"}/${page.slug?.current || ""}`,
    lastModified: page._updatedAt || page.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  } as SitemapLink;
}

export default async function sitemap(): Promise<SitemapLink[]> {
  const links: SitemapLink[] = [];
  const content = await client.fetch(queries.sitemap.links);
  Object.keys(content).forEach((key) => {
    content[key].forEach((page: Page) => {
      links.push(getURL(page, key));
    });
  });
  return links;
}