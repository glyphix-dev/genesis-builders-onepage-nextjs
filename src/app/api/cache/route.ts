// Nextjs API route for caching
import { revalidatePath, revalidateTag } from "next/cache";
import { getGroup, QueryTypes, CACHE_PATHS } from "@/sanity/queries";

export async function POST(req: Request) {
  const post = await req.json();
  const group = getGroup(post._type as QueryTypes);
  const paths = CACHE_PATHS[post._type as QueryTypes];

  console.log({ post, group, paths });
  // Revalidate tags
  if (post?.slug?.current) {
    revalidateTag(post.slug.current)
  }
  revalidateTag(group)
  // Revalidate paths
  paths.forEach(path => {
    revalidatePath(path);

    const contentPath = [path, post.slug?.current || ''].join('/');
    revalidatePath(contentPath);
  });

  return Response.json({ success: true, group });
}