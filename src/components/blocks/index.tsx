import type {
  AdvancedImage as AdvancedImageBlockType,
  ContentBlock as ContentBlockType,
  HeroBlock as HeroBlockType,
  CarouselBlock as CarouselBlockType,
  SlideshowBlock as SlideshowBlockType,
  Bento2Block as Bento2BlockType,
  YoutubeBlock as YoutubeBlockType,
  FeaturesBlock as FeaturesBlockType,
  GalleryBlock as GalleryBlockType,
  CallToActionBlock as CallToActionBlockType,
  LogoParadeBlock as LogoParadeBlockType,
  StatsBlock as StatsBlockType,
  TestimonialBlock as TestimonialBlockType,
  TwoColumnListBlock as TwoColumnListBlockType,
} from "@/types/types.sanity";

import type { IImageBlockProps } from "./ImageBlock";
import { ImageBlock } from "./ImageBlock";
import Bento2Block from "./Bento2Block";
import SlideshowBlock from "./SlideshowBlock";
import FeaturesBlock from "./FeaturesBlock";
import YouTube from "./YouTube";
import GalleryBlock from "./GalleryBlock";
import TestimonialBlockComponent from "./TestimonialBlock";
import CarouselBlock from "./CarouselBlock";
import HeroBlock from "./HeroBlock";
import ContentBlock from "./ContentBlock";
import CallToActionBlock from "./CallToActionBlock";
import LogoParadeBlock from "./LogoParadeBlock";
import StatsBlock from "./StatsBlock";
import { AdvancedImageBlock } from "./AdvancedImageBlock";
import Block from "./Block";
import TwoColumnList from "./TwoColumnList";

export const components = {
  types: {
    advancedImage: ({ value }: { value: AdvancedImageBlockType }) => {
      return (
        <AdvancedImageBlock {...value} />
      );
    },
    bento2Block: ({ value }: { value: Bento2BlockType }) => {
      return value && (
        <Block options={value?.options} type="bento2">
          <Bento2Block {...value} />
        </Block>
      )
    },
    callToActionBlock: ({ value }: { value: CallToActionBlockType }) => {
      return (
        <Block options={value?.options} type="callToAction">
          <CallToActionBlock value={value} />
        </Block>
      );
    },
    carouselBlock: ({ value }: { value: CarouselBlockType }) => {
      return (
        <Block options={value?.options} type="carousel">
          <CarouselBlock value={value} />
        </Block>
      );
    },
    contentBlock: ({ value }: { value: ContentBlockType }) => {
      return (
        <Block options={value?.options} type="content">
          <ContentBlock value={value} />
        </Block>
      );
    },
    image: ({ value }: { value: IImageBlockProps }) => {
      return (
        <ImageBlock {...value} />
      );
    },
    featuresBlock: ({ value }: { value: FeaturesBlockType }) => {
      return (
        <Block options={value?.options} type="features">
          <FeaturesBlock {...value} />
        </Block>
      );
    },
    galleryBlock: ({ value }: { value: GalleryBlockType }) => {
      return (
        <Block options={value?.options} type="gallery">
          <GalleryBlock value={value} />
        </Block>
      );
    },
    heroBlock: ({ value }: { value: HeroBlockType }) => {
      return (
        <Block options={value?.options} type="hero">
          <HeroBlock value={value} />
        </Block>
      );
    },
    logoParadeBlock: ({ value }: { value: LogoParadeBlockType }) => {
      return (
        <Block options={value?.options} type="logoParade">
          <LogoParadeBlock value={value} />
        </Block>
      );
    },
    slideshowBlock: ({ value }: { value: SlideshowBlockType }) => {
      return value && (
        <Block options={value?.options} type="slideshow">
          <SlideshowBlock {...value} />
        </Block>
      )
    },
    statsBlock: ({ value }: { value: StatsBlockType }) => {
      return (
        <Block options={value?.options} type="stats">
          <StatsBlock value={value} />
        </Block>
      );
    },
    testimonialBlock: ({ value }: { value: TestimonialBlockType }) => {
      return (
        <Block options={value?.options} type="testimonial">
          <TestimonialBlockComponent value={value} />
        </Block>
      );
    },
    twoColumnListBlock: ({ value }: { value: TwoColumnListBlockType }) => {
      return (
        <Block options={value?.options} type="twoColumnList">
          <TwoColumnList {...value} />
        </Block>
      );
    },
    youtubeBlock: async ({ value }: { value: YoutubeBlockType }) => {
      return (
        <Block className="aspect-video mx-auto mb-16 max-w-[640px]" type="youtube">
          <YouTube value={value} />
        </Block>
      );
    },
  },
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => {
      return children ? (
        <p className="">
          {children}
        </p>
      ) : null;
    },
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode, value?: { href?: string } }) => {
      const rel = value?.href && !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      const target = value?.href && !value.href.startsWith("/") ? "_new" : "_self";
      return (
        <a
          href={value?.href || "#"}
          rel={rel}
          className="underline underline-offset-2 whitespace-wrap text-primary break-all"
          target={target}
        >
          {children}
        </a>
      );
    },
  },
};
