import * as React from 'react';
import { HeroBlock as HeroBlockType, BlockContent } from '@/types/types.sanity';
import { getImageData } from '@/lib/utils';
import SanityImage from '../SanityImage';
import { components } from '../blocks';
import { PortableText } from '@portabletext/react';
// import { TextSize } from '@/types/types.custom';
interface IHeroBlockProps {
  value: HeroBlockType
}

const HeroBlock: React.FunctionComponent<IHeroBlockProps> = async ({ value }) => {
  const { image, valueProposition } = value;
  const imageData = image?.asset ? await getImageData({ asset: image?.asset }) : null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-muted items-stretch">
      <div className="order-2 prose prose-xl max-w-none p-12 prose-muted-foreground prose-headings:font-serif prose-headings:text-5xl">
        <PortableText value={valueProposition as BlockContent} components={components} />
      </div>
      <div className="order-1 relative w-full h-full">
        <div className="aspect-video md:aspect-square" />
        {imageData && <SanityImage className="absolute top-0 right-0 bottom-0 left-0 not-prose basis-1 object-cover w-full h-full" image={imageData} alt={imageData.altText || ''} width={600} height={600} />}
      </div>
    </div>
  );
};

export default HeroBlock;