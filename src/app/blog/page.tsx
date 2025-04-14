import type { PageProps } from "@/types/types.custom";
import { client } from "@/sanity/lib/client";
import queries, { getRevalidation, QueryTypes } from "@/sanity/queries";
import Container from "@/components/Container";
import Content from "@/components/Content";
import Aside from "@/components/Aside";
import Main from "@/components/Main";
import Layout from "@/components/Layout";
import LayoutHeader from "@/components/LayoutHeader";
import Pagination from "@/components/Pagination";
import { tryCatch } from "@/lib/tryCatch";
import PostList from "@/components/PostList";
const revalidate = getRevalidation(QueryTypes.Posts)

export default async function Blog({ searchParams }: PageProps) {
  const params = await searchParams;
  const perPage = 12;
  const page = parseInt(params.page as string) || 1;
  const start = (perPage * page) - perPage;
  const end = (perPage * page) - 1 > 0 ? (perPage * page) - 1 : 0;

  const { data, error } = await tryCatch(client.fetch(queries.posts.postsPage, {
    start,
    end
  }, revalidate))
  if (error) {
    throw new Error("Failed to fetch posts")
  }

  return data && (
    <Layout>
      <Container>
        <LayoutHeader title={"Blog"} subtitle={`${data.total} posts`} />
        <Content hasAside>
          <Main hasAside>
            <div className="flex flex-col gap-8">
              <PostList list={data.posts} cards={true} />
              <Pagination
                queryString={""}
                total={data.total}
                currentPage={page}
                perPage={perPage}
                path={"/blog"}
              />
            </div>
          </Main>
          <Aside>
            content aside
          </Aside>
        </Content>
      </Container>
    </Layout>
  );
}