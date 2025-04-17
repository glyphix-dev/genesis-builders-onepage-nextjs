import * as React from 'react';
import { PortableText } from '@portabletext/react';
import Prose from './Prose';
import { components } from './blocks'
import type { BlockContent } from '@/types/types.sanity';
import { TextSize } from '@/types/types.custom';

interface ISanityContentProps {
  content: BlockContent
  size?: string
  className?: string
}

const SanityContent: React.FunctionComponent<ISanityContentProps> = ({ content, size, className }) => {
  return (
    <Prose size={size as keyof typeof TextSize} className={className}>
      <PortableText value={content} components={components} />
    </Prose>
  );
};

export default SanityContent;
