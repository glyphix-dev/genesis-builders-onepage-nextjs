import * as React from 'react';
import type { Page, Post } from '@/types/types.sanity';
import PostCard from './PostCard';
import { cn } from '@/lib/utils';

interface IPostListProps {
  list: Post[] | Page[];
  className?: string;
  cards?: boolean;
}

const PostList: React.FunctionComponent<IPostListProps> = (props) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", props.className)}>
      {props.list.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
