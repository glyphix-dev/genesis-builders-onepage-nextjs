import * as React from 'react';
import { HeroBlock as HeroBlockType } from '@/types/types.sanity';

import Image from 'next/image'
import { getImageData } from '@/lib/utils';
interface IHeroBlockProps {
  value: HeroBlockType
}

const HeroBlock: React.FunctionComponent<IHeroBlockProps> = async ({ value }) => {
  // console.log({ value });
  const { image, valueProposition } = value;
  console.log({ image, valueProposition });
  const imageData = image?.asset ? await getImageData({ asset: image?.asset, width: 1200 }) : null;
  console.log({ imageData });
  return (
    <div className="flex gap-96">
      <h1>Hero Block</h1>
      {imageData && <Image src={imageData.url} alt={imageData.altText || ''} width={1200} height={imageData.height} />}
    </div>
  );
};

export default HeroBlock;