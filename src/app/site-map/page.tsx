import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import queries, { getRevalidation, QueryTypes } from "@/sanity/queries";
import Container from "@/components/Container";
import LayoutHeader from "@/components/LayoutHeader";
import Layout from "@/components/Layout";
import ContentContainer from "@/components/ContentContainer";
import Prose from "@/components/Prose";
import Main from "@/components/Main";
import Link from "next/link";
import { tryCatch } from "@/lib/tryCatch";
import { v4 as uuidv4 } from 'uuid';
const revalidate = getRevalidation(QueryTypes.Sitemap)

export const metadata: Metadata = {
  title: "Sitemap",
  description: "All the content available on our site",
};

export default async function Page() {
  const { data, error } = await tryCatch(client.fetch(queries.sitemap.links, {}, revalidate));

  if (error) {
    throw new Error("Failed to fetch sitemap links")
  }

  return (
    <>
      <Layout hasStickyHeader>
        <Container>
          <LayoutHeader title={"Sitemap"} />
          <ContentContainer>
            <Main>
              <Prose>
                {Object.keys(data).map((key) => {
                  return (
                    <div key={key}>
                      <h2>{key}</h2>
                      <ul>
                        {data[key].map((link: { slug: { current: string }, title: string }) => (
                          <li key={uuidv4()}>
                            <Link href={`/${link.slug?.current}`}>
                              <article className="flex flex-col gap-4">
                                <header>
                                  <h3>{link.title}</h3>
                                </header>
                              </article>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </Prose>
            </Main>
          </ContentContainer>
        </Container>
      </Layout>
    </>
  );
}
