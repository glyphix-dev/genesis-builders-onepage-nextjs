import type { Bento2Block } from '@/types/types.sanity';
import { client } from '@/sanity/lib/client';
import createImageUrlBuilder from '@sanity/image-url'
import * as React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage, { ISanityImageProps } from '../SanityImage';
import SanityContent from '../SanityContent';
import { TextSize } from '@/types/types.custom';

const Bento2Block: React.FunctionComponent<Bento2Block> = async (props) => {
  const { left, right, reverse, offset, textSize } = props;
  if (!left && !right) return null;

  return (
    <div className={`content-block flex items-center flex-col md:flex-row md:gap-16 ${reverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'}`}>
      <div className={`${offset ? 'basis-2/3' : 'basis-1/2'}`}>
        {left && <SanityContent content={left} size={textSize as keyof typeof TextSize} />}
      </div>
      <div className={`${offset ? 'basis-1/3' : 'basis-1/2'}`}>
        {right && <SanityContent content={right} size={textSize as keyof typeof TextSize} />}
      </div>
    </div>
  );
};

export default Bento2Block;
