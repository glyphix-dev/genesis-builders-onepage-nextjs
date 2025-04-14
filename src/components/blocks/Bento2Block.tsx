import type { Bento2Block } from '@/types/types.sanity';
import { client } from '@/sanity/lib/client';
import createImageUrlBuilder from '@sanity/image-url'
import * as React from 'react';
import { PortableText } from '@portabletext/react';
import SanityImage, { ISanityImageProps } from '../SanityImage';

const Bento2Block: React.FunctionComponent<Bento2Block> = async (props) => {
  const { content, image, reverse } = props;
  if (!image) return null;
  const imageUrl = createImageUrlBuilder(client).image(image).width(500).height(500).fit('max').url();

  return (
    <div className={`flex items-center flex-col md:flex-row md:gap-16 ${reverse ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col-reverse md:flex-row'}`}>
      <div className="basis-1/2">
        {content && <PortableText value={content} />}
      </div>
      <div className="basis-1/2">
        {image && imageUrl && <SanityImage image={image as unknown as ISanityImageProps['image']} alt={"Bento Image"} width={500} height={500} />}
      </div>
    </div>
  );
};

export default Bento2Block;
