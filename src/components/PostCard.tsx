import * as React from 'react';
import type { Page, Post } from '@/types/types.sanity';
import { cn } from '@/lib/utils';
import urlBuilder from '@sanity/image-url';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

enum PostTypes {
  Home = "home",
  Page = "page",
  Post = "post",
}

enum PostListPaths {
  Home = "/",
  Page = "/[slug]",
  Post = "/blog/[slug]",
}

interface IPostCardProps {
  post: Post | Page;
  className?: string;
}

const PostCard: React.FunctionComponent<IPostCardProps> = (props) => {
  const imageUrl = props.post.gallery?.[0] ? urlBuilder(client).image(props.post.gallery?.[0]).url() : "";
  return (
    <Link href={`${(props.post._type === PostTypes.Post ? PostListPaths.Post : PostListPaths.Page).replace('[slug]', '')}${props.post.slug}`} className={cn("flex items-stretch", props.className)}>
      <article className={cn("flex items-stretch")}>
        <Card className={cn("flex flex-col-reverse justify-end")}>
          <CardHeader>
            <CardTitle>{props.post.title}</CardTitle>
            {props.post.description ? <CardDescription>{props.post.description}</CardDescription> : null}
          </CardHeader>
          <CardContent>
            {imageUrl && <Image src={imageUrl || ""} alt={props.post.title || ""} width={300} height={300} />}
          </CardContent>
        </Card>
      </article>
    </Link>
  );
};

export default PostCard;
