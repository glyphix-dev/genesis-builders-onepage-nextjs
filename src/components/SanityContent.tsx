import * as React from 'react';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Prose from './Prose';
import { components } from './blocks'
import type { BlockContent } from '@/types/types.sanity';
import { TextSize } from '@/types/types.custom';
import { cn } from '@/lib/utils';

interface ISanityContentProps {
  content: BlockContent
  size?: string
  className?: string
}

const SanityContent: React.FunctionComponent<ISanityContentProps> = ({ content, size, className }) => {
  return (
    <Prose size={size as keyof typeof TextSize} className={cn("max-w-none", className)}>
      <PortableText value={content} components={components as Partial<PortableTextReactComponents>} />
    </Prose>
  );
};

export default SanityContent;
