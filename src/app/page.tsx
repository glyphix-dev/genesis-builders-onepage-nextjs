import * as React from "react";
import type { Home } from "@/types/types.sanity";
import queries, { getRevalidation, QueryTypes } from "@/sanity/queries";
import { client } from "@/sanity/lib/client";
import Container from "@/components/Container";
import ContentContainer from "@/components/ContentContainer";
import Main from "@/components/Main";
import Layout from "@/components/Layout";
import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
import { tryCatch } from "@/lib/tryCatch";
// import { PortableText } from "@portabletext/react";
// import { components } from "@/components/blocks";
// import LandingPageContent from "@/components/LandingPageContent";
import BodyContent from "@/components/BodyContent";
const revalidate = getRevalidation(QueryTypes.Home)

export default async function Home() {

  const { data, error } = await tryCatch(client.fetch(queries.home.page, {}, revalidate));
  if (error) {
    throw new Error("Failed to fetch home page")
  }
  // const { data: posts, error: postsError } = await tryCatch(client.fetch(queries.posts.homePosts, {}, revalidate));
  // if (postsError) {
  //   throw new Error("Failed to fetch home posts")
  // }

  // If the home page is not found, return a 404 error
  if (!data) {
    return notFound()
  }

  return (
    <Layout hasStickyHeader>
      <div className="relative">
        <Container>
          <ContentContainer>
            <Main>
              <BodyContent data={data} />
            </Main>
          </ContentContainer>
        </Container>
      </div>
    </Layout >
  );
}

export async function generateMetadata() {
  return await client.fetch(queries.home.metadata, {}, revalidate);
}