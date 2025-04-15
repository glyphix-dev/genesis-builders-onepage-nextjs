import * as React from 'react';
import { HeroBlock as HeroBlockType, BlockContent } from '@/types/types.sanity';
import SanityContent from '../SanityContent';
import Image from 'next/image'
import { getImageData } from '@/lib/utils';
// import { TextSize } from '@/types/types.custom';
interface IHeroBlockProps {
  value: HeroBlockType
}

const HeroBlock: React.FunctionComponent<IHeroBlockProps> = async ({ value }) => {
  // console.log({ value });
  const { image, valueProposition } = value;
  console.log({ image, valueProposition });
  const imageData = image?.asset ? await getImageData({ asset: image?.asset }) : null;
  console.log({ imageData });
  return (
    <div className="flex gap-16">
      <div><SanityContent content={valueProposition as BlockContent} size={"2xl"} /></div>
      {imageData && <Image src={imageData.url} alt={imageData.altText || ''} width={800} height={600} />}
    </div>
  );
};

export default HeroBlock;