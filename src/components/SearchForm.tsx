"use client";
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface ISearchProps {
  s?: string;
  className?: string;
}

const SearchForm: React.FunctionComponent<ISearchProps> = ({ s, className }) => {
  return (
    <form action={"/search"} method="GET" className={cn("flex items-center gap-2", className)}>
      <input
        name="s"
        type="text"
        className="border-b border-gray-300 p-1 text-sm"
        value={s}
        placeholder="Keyword"
      />
      <Button type="submit" size="sm" className='rounded-none'>Search</Button>
    </form>
  );
};

export default SearchForm;
