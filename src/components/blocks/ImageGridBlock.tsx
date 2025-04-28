import * as React from 'react';

import type { ImageGridBlock as ImageGridBlockType } from "@/types/types.sanity";
import SanityImage from '@/components/SanityImage';

interface IImageGridProps {
  value: ImageGridBlockType
}

const ImageGrid: React.FunctionComponent<IImageGridProps> = (props) => {
  const { value: { images } } = props;
  return images && images.length > 0 ? (
    <div className="grid grid-cols-2 gap-4 bg-transparent">
      {images.map((imageRef) => {
        const { image, options } = imageRef;
        return image?.asset && (
          <div key={imageRef._key}>
            <SanityImage image={image} width={options?.width} height={options?.height} />
          </div>
        )
      })}
    </div>
  ) : null;
};

export default ImageGrid;
