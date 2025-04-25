import * as React from 'react';
import { HeroBlock as HeroBlockType, BlockContent } from '@/types/types.sanity';
import { cn } from '@/lib/utils';
import { components } from '../blocks';
import { PortableText } from '@portabletext/react';
import Container from '../Container';
import { client } from '@/sanity/lib/client';
import urlBuilder from '@sanity/image-url';
import Image from 'next/image';

interface IHeroBlockProps {
  value: HeroBlockType
}

const HeroBlock: React.FunctionComponent<IHeroBlockProps> = async ({ value }) => {
  const { image, valueProposition, options } = value;
  const imageUrl = image?.asset ? urlBuilder(client).image(image?.asset).width(2000).height(1125).dpr(2).auto('format').url() : null;
  const fullWidth = options && 'bgFullWidth' in options && options.bgFullWidth ? "w-screen relative left-1/2 -translate-x-1/2" : "";
  return (
    <div className={cn(
      "relative md:py-24 bg-cover bg-center bg-black/40 bg-blend-multiply h-[700px] flex justify-center items-center",
      // "bg-[url('https://cdn.sanity.io/images/qxyqen3g/development/d9a69d2efc57289b8480a8d19b7605c34ad7f7d9-2000x1335.jpg?rect=0,106,2000,1125&w=600&h=338&auto=format&dpr=2')]",
      // "lg:bg-[url('https://cdn.sanity.io/images/qxyqen3g/development/d9a69d2efc57289b8480a8d19b7605c34ad7f7d9-2000x1335.jpg?rect=0,106,2000,1125&w=1500&h=844&auto=format&dpr=2')]",
      // "xl:bg-[url('https://cdn.sanity.io/images/qxyqen3g/development/d9a69d2efc57289b8480a8d19b7605c34ad7f7d9-2000x1335.jpg?rect=0,106,2000,1125&w=1920&h=1080&auto=format&dpr=2')]",
      options?.bgFullWidth ? fullWidth : ""
    )}>
      <Image src={imageUrl || ""} alt="Hero Image" fill className="mix-blend-multiply object-cover absolute top-0 left-0 not-prose" />
      <div className={cn(
        "py-12 px-8 2xl:px-0 text-center text-white prose-white prose-headings:text-center sm:prose-headings:text-center",
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