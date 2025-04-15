import * as React from 'react';
import { LogoParadeBlock as LogoParadeBlockType } from '@/types/types.sanity';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import urlBuilder from '@sanity/image-url';
interface ILogoParadeBlockProps {
  value: LogoParadeBlockType
}

const LogoParadeBlock: React.FunctionComponent<ILogoParadeBlockProps> = (props) => {
  const { images } = props.value
  const builder = urlBuilder(client)
  return (
    <div>
      <div className='flex flex-wrap gap-24 justify-center'>
        {images?.map((image: any) => {
          const url = builder.image(image).width(400).height(400).fit('max').dpr(2).auto('format').url()
          return url && (
            <Image
              src={url}
              alt={image.alt}
              width={image.asset.width || 400}
              height={image.asset.height || 400}
              className='w-40 h-40'
            />
          )
        })}
      </div>
    </div>
  );
};

export default LogoParadeBlock;
