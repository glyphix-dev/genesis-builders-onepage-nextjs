import * as React from 'react';
import { client } from '@/sanity/lib/client';
import createImageUrlBuilder from '@sanity/image-url';
import type { FeaturesBlock as FeaturesBlockType, SanityImageAsset } from '@/types/types.sanity';
import Image from 'next/image';
import Heading from '../Heading';

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
    <div>
      {props.heading && <Heading text={props.heading} level={2} className='mt-0 text-center font-serif text-5xl' />}
      <div className={`grid grid-cols-1 ${columns[props?.options?.columns ? props.options.columns - 1 : 2]} gap-16 items-start`}>
        {props.features?.map(async (feature: Feature) => {
          const imageUrl = feature.icon ? createImageUrlBuilder(client).image(feature.icon).width(width).height(height).fit('max').dpr(2).auto('format').url() : null;
          const imageData: SanityImageAsset | null = feature.icon?.asset ? (await client.fetch(`*[_id == "${feature.icon.asset._ref}"]`))[0] : null;
          return (
            <div key={feature._key} className="flex flex-col items-center justify-center gap-2 text-center">
              {
                feature.icon && imageUrl && imageData && (
                  <div className="w-full flex items-start justify-center my-0 not-prose">
                    <Image src={imageUrl} alt={imageData.altText || feature.title || ''} width={width} height={height} />
                  </div>
                )
              }
              <h3 className="text-center tracking-tight mt-0 text-balance text-xl">{feature.title}</h3>
              <p className="text-center text-base">{feature.description}</p>
            </div>
          )
        })}
      </div>

    </div>
  );
};

export default FeaturesBlock;
