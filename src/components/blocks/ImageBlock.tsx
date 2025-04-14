import * as React from "react";
import SanityImage, { ISanityImageProps } from '../SanityImage';

export type IImageBlockProps = {
  _type: 'image',
  _key: string,
  asset: {
    _ref: string,
    _type: 'reference'
  }
};

export const ImageBlock: React.FunctionComponent<IImageBlockProps> = async (props) => {
  if (!props.asset) return null;
  return (
    <SanityImage
      image={props.asset as unknown as ISanityImageProps['image']}
      className="mx-auto"
    />
  );
};
