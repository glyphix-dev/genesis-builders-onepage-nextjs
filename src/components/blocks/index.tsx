import type { CarouselBlock as CarouselBlockType, SlideshowBlock as SlideshowBlockType, Bento2Block as Bento2BlockType, YoutubeBlock as YoutubeBlockType, FeaturesBlock as FeaturesBlockType, TestimonialBlock, GalleryBlock as GalleryBlockType } from "@/types/types.sanity";
import type { IImageBlockProps } from "./ImageBlock";
import { v4 as uuidv4 } from 'uuid';
import { ImageBlock } from "./ImageBlock";
import Bento2Block from "./Bento2Block";
import SlideshowBlock from "./SlideshowBlock";
import FeaturesBlock from "./FeaturesBlock";
import YouTube from "./YouTube";
import GalleryBlock from "./GalleryBlock";
import TestimonialBlockComponent from "./TestimonialBlock";
import CarouselBlock from "./CarouselBlock";

interface IBlock {
  children?: React.ReactNode
}

const Block = ({ children }: IBlock) => {
  return <div id={uuidv4()} className="my-16">{children}</div>
}

export const components = {
  types: {
    image: ({ value }: { value: IImageBlockProps }) => {
      return (
        <Block>
          <ImageBlock {...value} />
        </Block>
      );
    },
    featuresBlock: ({ value }: { value: FeaturesBlockType }) => {
      return (
        <Block>
          <FeaturesBlock {...value} />
        </Block>
      );
    },
    slideshowBlock: ({ value }: { value: SlideshowBlockType }) => {
      const id = uuidv4()
      return value && (
        <div id={id} className="mb-16">
          <SlideshowBlock {...value} />
        </div>
      )
    },
    bento2Block: ({ value }: { value: Bento2BlockType }) => {
      const id = uuidv4()
      return value && (
        <div id={id} className="mb-16">
          <Bento2Block {...value} />
        </div>
      )
    },
    youtubeBlock: async ({ value }: { value: YoutubeBlockType }) => {
      const id = uuidv4()
      return (
        <div id={id} className="aspect-video mx-auto mb-16 max-w-[640px]">
          <YouTube value={value} />
        </div>
      );
    },
    galleryBlock: ({ value }: { value: GalleryBlockType }) => {
      return (
        <Block>
          <GalleryBlock value={value} />
        </Block>
      );
    },
    testimonialBlock: ({ value }: { value: TestimonialBlock }) => {
      return (
        <Block>
          <TestimonialBlockComponent value={value} />
        </Block>
      );
    },
    carouselBlock: ({ value }: { value: CarouselBlockType }) => {
      return (
        <Block>
          <CarouselBlock value={value} />
        </Block>
      );
    },
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode, value?: { href?: string } }) => {
      const rel = value?.href && !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value?.href || "#"}
          rel={rel}
          className="underline underline-offset-2 decoration-yellow decoration-2"
        >
          {children}
        </a>
      );
    },
  },
};
