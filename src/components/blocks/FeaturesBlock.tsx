import * as React from 'react';
import { client } from '@/sanity/lib/client';
import createImageUrlBuilder from '@sanity/image-url';
import type { FeaturesBlock as FeaturesBlockType, SanityImageAsset } from '@/types/types.sanity';
import Image from 'next/image';
import Heading from '../Heading';
import { v4 as uuidv4 } from 'uuid';
import { cn } from '@/lib/utils';

const width = 150;
const height = 150;

const columns = [
  "md:grid-cols-1",
  "md:grid-cols-2 lg:grid-cols-3",
  "sm:grid-cols-2 lg:grid-cols-3",
  "md:grid-cols-4",
  "md:grid-cols-5",
  "md:grid-cols-6",
  "md:grid-cols-7",
]

type Feature = NonNullable<FeaturesBlockType['features']>[number];

const FeaturesBlock: React.FunctionComponent<FeaturesBlockType> = async (props) => {
  switch (props?.options?.layout) {
    case 'default':
      return <IconFeatures {...props} />;
    case 'thumbnails':
      return <ThumbnailFeatures {...props} />;
  }
};

export default FeaturesBlock;

const IconFeatures: React.FunctionComponent<FeaturesBlockType> = async (props) => {

  return props?.features && (
    <div>
      {props.heading && <Heading text={props.heading} level={2} className='mt-0 text-center font-serif text-5xl mb-[var(--block-padding)]' />}
      <div className={`grid grid-cols-1 ${columns[props?.options?.columns ? props.options.columns - 1 : 2]} gap-8 md:gap-[var(--block-padding)] items-start`}>
        {props.features?.map(async (feature: Feature) => {
          const imageUrl = feature.icon ? createImageUrlBuilder(client).image(feature.icon).width(width).height(height).fit('max').dpr(2).auto('format').url() : null;
          const imageData: SanityImageAsset | null = feature.icon?.asset ? (await client.fetch(`*[_id == "${feature.icon.asset._ref}"]`))[0] : null;
          return (
            <div key={uuidv4()} className={cn(
              "content-block grid grid-cols-4 gap-8",
              "sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-2 text-center",
            )}>
              {
                feature.icon && imageUrl && imageData && (
                  <div className="w-full flex items-start justify-center my-0 not-prose">
                    <Image src={imageUrl} alt={imageData.altText || feature.title || ''} width={width} height={height} className="w-full h-auto md:w-52 md:h-52" />
                  </div>
                )
              }
              <div className="text-left sm:text-center col-span-3">
                <h3 className="tracking-tight mt-0 text-balance text-xl">{feature.title}</h3>
                <p className="text-base">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );

}

const ThumbnailFeatures: React.FunctionComponent<FeaturesBlockType> = async (props) => {
  return props?.features && (
    <div>
      {props.heading && <Heading text={props.heading} level={2} className='mt-0 text-center font-serif text-5xl mb-[var(--block-padding)]' />}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-[var(--block-padding)] items-start`}>
        {props.features?.map(async (feature: Feature) => {
          const imageData: SanityImageAsset | null = feature.icon?.asset ? (await client.fetch(`*[_id == "${feature.icon.asset._ref}"]`))[0] : null;
          return (
            <div
              key={uuidv4()}
              className="bg-cover bg-center min-h-96 relative"
              style={{ backgroundImage: imageData?.url ? `url(${imageData?.url})` : "" }}
            >
              <div
                className="absolute inset-0 h-96 bg-linear-to-t from-black to-transparent"
              >
              </div>
              <div className="absolute inset-0 content-block flex flex-col gap-2 h-96 text-white p-4">
                <div className="basis-2/3 mix-blend-normal">&nbsp;</div>
                <div className="basis-1/3 mix-blend-normal">
                  <h3 className="text-center tracking-tighter mt-0 text-balance text-xl text-white">{feature.title}</h3>
                  <p className="text-center text-base">{feature.description}</p>
                </div>
              </div>
            </div>

          )
        })}
      </div>

    </div>
  );
}