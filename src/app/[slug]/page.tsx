import type { Page } from "@/types/types.sanity";
import type { Metadata } from 'next'
import type { PageProps } from "@/types/types.custom";
import { client } from "@/sanity/lib/client";
import queries, { getRevalidation, QueryTypes } from "@/sanity/queries";
import Container from "@/components/Container";
import ContentContainer from "@/components/ContentContainer";
import Main from "@/components/Main";
import Layout from "@/components/Layout";
import LayoutHeader from "@/components/LayoutHeader";
import { notFound } from "next/navigation";
import { tryCatch } from "@/lib/tryCatch";
import BodyContent from "@/components/BodyContent";

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
    <Layout hasStickyHeader>
      <Container>
        <LayoutHeader title={data?.title || "Untitled"} />
        <ContentContainer>
          <Main>
            <BodyContent data={data} />
          </Main>
        </ContentContainer>
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