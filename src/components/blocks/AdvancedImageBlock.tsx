import * as React from "react";
import SanityImage, { ISanityImageProps } from '../SanityImage';
import { cn } from "@/lib/utils";

export type IImageBlockProps = {
  _type: "advancedImage";
  image?: {
    _type: "image";
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
    };
  };
  metadata?: {
    title?: string;
    alt?: string;
    caption?: string;
    credit?: string;
  };
  options?: {
    circle?: boolean;
    figure?: boolean;
    width?: number;
    height?: number;
  };
};

export const AdvancedImageBlock: React.FunctionComponent<IImageBlockProps> = async ({ image, metadata, options }) => {
  if (!image?.asset?._ref) return null;

  const transformedImage: ISanityImageProps['image'] = {
    asset: {
      _ref: image.asset._ref,
      _type: 'reference',
      _weak: false
    }
  };

  return options?.figure ? (
    <figure className="mx-auto">
      {metadata?.title && (
        <p className="text-2xl font-bold">
          {metadata?.title}
        </p>
      )}
      <SanityImage
        image={transformedImage}
        className={cn("mx-auto", options?.circle && "rounded-full")}
        width={options?.width}
        height={options?.height}
        alt={metadata?.alt}
      />
      {metadata?.caption && (
        <figcaption className="text-sm text-muted-foreground">
          {metadata?.caption}
        </figcaption>
      )}
    </figure>
  ) : (
    <SanityImage
      image={transformedImage}
      width={options?.width}
      height={options?.height}
      className={cn("mx-auto bg-transparent", options?.circle && "rounded-full")}
      alt={metadata?.alt}
    />
  );
};
