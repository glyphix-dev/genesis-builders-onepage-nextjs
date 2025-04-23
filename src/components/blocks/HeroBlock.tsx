import * as React from 'react';
import { HeroBlock as HeroBlockType, BlockContent } from '@/types/types.sanity';
import { cn, getImageData } from '@/lib/utils';
import { components } from '../blocks';
import { PortableText } from '@portabletext/react';
import Container from '../Container';
interface IHeroBlockProps {
  value: HeroBlockType
}

const HeroBlock: React.FunctionComponent<IHeroBlockProps> = async ({ value }) => {
  const { image, valueProposition, options } = value;
  const imageData = image?.asset ? await getImageData({ asset: image?.asset }) : null;
  const fullWidth = options && 'bgFullWidth' in options && options.bgFullWidth ? "w-screen relative left-1/2 -translate-x-1/2" : "";

  return (
    <div className={cn(
      "py-12 md:py-24 bg-cover bg-center bg-black/40 bg-blend-multiply h-[700px] flex justify-center items-center",
      options?.bgFullWidth ? fullWidth : ""
    )} style={{ backgroundImage: imageData?.url ? `url(${imageData?.url})` : "" }}>
      <div className={cn(
        "px-6 text-center text-white prose-white prose-headings:text-center sm:prose-headings:text-center",
      )}>
        {options?.bgFullWidth ?
          (
            <Container>
              <PortableText value={valueProposition as BlockContent} components={components} />
            </Container>
          ) :
          (
            <PortableText value={valueProposition as BlockContent} components={components} />
          )
        }
      </div>
    </div>
  );
};

export default HeroBlock;