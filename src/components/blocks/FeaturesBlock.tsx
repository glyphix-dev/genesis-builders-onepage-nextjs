import * as React from 'react';
import { client } from '@/sanity/lib/client';
import createImageUrlBuilder from '@sanity/image-url';
import type { FeaturesBlock as FeaturesBlockType, SanityImageAsset } from '@/types/types.sanity';
import SanityImage, { ISanityImageProps } from '../SanityImage';

const width = 150;
const height = 150;

const columns = [
  "md:grid-cols-1",
  "md:grid-cols-2",
  "md:grid-cols-3",
  "md:grid-cols-4",
  "md:grid-cols-5",
  "md:grid-cols-6",
  "md:grid-cols-7",
]

type Feature = NonNullable<FeaturesBlockType['features']>[number];

const FeaturesBlock: React.FunctionComponent<FeaturesBlockType> = async (props) => {
  return props?.features && (
    <div className={`grid grid-cols-1 ${columns[props?.features?.length - 1 || 0]} gap-4 items-start`}>
      {props.features?.map(async (feature: Feature) => {
        const imageUrl = feature.icon ? createImageUrlBuilder(client).image(feature.icon).width(width).height(height).fit('max').dpr(2).auto('format').url() : null;
        const imageData: SanityImageAsset | null = feature.icon?.asset ? (await client.fetch(`*[_id == "${feature.icon.asset._ref}"]`))[0] : null;
        return (
          <div key={feature._key} className="text-center flex flex-col items-start justify-center gap-2 not-prose">
            {
              feature.icon && imageUrl && imageData && (
                <div className="w-full flex items-start justify-center my-0">
                  <SanityImage image={feature.icon as unknown as ISanityImageProps['image']} alt={imageData.altText || feature.title || ''} width={width} height={height} />
                </div>
              )
            }
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        )
      })}
    </div>
  );
};

export default FeaturesBlock;
