import type { Page } from "@/types/types.sanity";
import type { Metadata } from 'next'
import type { PageProps } from "@/types/types.custom";
import { client } from "@/sanity/lib/client";
import queries, { getRevalidation, QueryTypes } from "@/sanity/queries";
import Container from "@/components/Container";
import Content from "@/components/Content";
import Main from "@/components/Main";
import Layout from "@/components/Layout";
import LayoutHeader from "@/components/LayoutHeader";
import SanityContent from "@/components/SanityContent";
import { notFound } from "next/navigation";
import { tryCatch } from "@/lib/tryCatch";

const revalidate = getRevalidation(QueryTypes.Pages)

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  // const data = await client.fetch(queries.pages.page, {
  //   slug
  // }, revalidate)

  const { data, error } = await tryCatch(client.fetch(queries.pages.page, {
    slug
  }, revalidate))

  if (error) {
    throw new Error("Failed to fetch page")
  }

  // If the page is not found, return a 404 error
  if (!data) {
    return notFound()
  }

  return (
    <Layout>
      <Container>
        <LayoutHeader title={data?.title || "Untitled"} />
        <Content>
          <Main>
            {data.body && <SanityContent content={data.body} className="prose-headings:font-serif prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h3:font-sans prose-h3:tracking-tight prose-h4:text-xl prose-h5:text-lg prose-h6:text-base" />}
          </Main>
        </Content>
      </Container>
    </Layout>
  );
}

// Generate Static Page Slugs
export async function generateStaticParams() {
  return await client.fetch<Page[]>(queries.pages.slugs);
}


export async function generateMetadata(
  { params }: PageProps,
): Promise<Metadata> {
  const p = await params
  return await client.fetch(queries.pages.metadata, {
    slug: p.slug
  }, revalidate)
}