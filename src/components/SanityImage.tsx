import * as React from 'react';
import { } from '@/types/types.sanity';
import Image from 'next/image';
import urlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import { cn } from '@/lib/utils';
import { CustomImageFields } from '@/types/types.custom';

export interface ISanityImageProps extends CustomImageFields {
  image: {
    asset: {
      _ref: string,
      _type: 'reference',
      _weak: boolean
    },
  };
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  priority?: boolean;
}

const SanityImage: React.FunctionComponent<ISanityImageProps> = async (props) => {
  if (!props.image) { return null; }
  const imageUrl = urlBuilder(client).image(props.image).width(props.width || 800).height(props.height || 600).dpr(2).auto('format').fit('max').url();
  const imageData = props?.image?.asset?._ref ? await client.fetch(`*[_id == $id][0]`, { id: props.image.asset._ref },) : null;
  return (
    <Image
      src={imageUrl}
      alt={props.alt || imageData?.altText || ""}
      width={props.width || imageData?.metadata?.dimensions?.width || 800}
      height={props.height || imageData?.metadata?.dimensions?.height || 600}
      className={cn(props.className || 'mx-auto mb-12')}
      priority={props.priority || false}
    />);
};

export default SanityImage;
