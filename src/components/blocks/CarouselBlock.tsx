import * as React from 'react';
import { BlockContent, CarouselBlock as CarouselBlockType } from '@/types/types.sanity';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SanityImage from '../SanityImage';
import { PortableText } from '@portabletext/react';
import { ISanityImageProps } from '../SanityImage';

interface ICarouselBlockProps {
  value: CarouselBlockType
}

const CarouselBlock: React.FunctionComponent<ICarouselBlockProps> = async ({ value }) => {
  return (
    <Carousel className='w-full not-prose' opts={{ loop: true }}>
      <CarouselContent>
        {value.images?.map(async (slide) => {
          return (
            <CarouselItem key={slide._key} className='relative p-0 w-full'>
              <figure className='relative w-full'>
                <SanityImage
                  image={slide.image as unknown as ISanityImageProps['image']}
                  priority={true}
                  className='object-cover my-0 w-full'
                />
                <figcaption className='p-8 pl-12 absolute bg-black/50 prose prose-white w-full top-0 bottom-0 left-0 before:content-[" "] max-w-none flex items-end'>
                  {/*  before:absolute before:top-0 before:bottom-0 before:-left-2 before:right-full before:bg-black/50 */}
                  <PortableText value={slide.body as BlockContent} />
                </figcaption>
              </figure>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  );
};

export default CarouselBlock;
