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
  TestimonialBlock
} from "@/types/types.sanity";
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
import HeroBlock from "./HeroBlock";
import ContentBlock from "./ContentBlock";
import CallToActionBlock from "./CallToActionBlock";
import LogoParadeBlock from "./LogoParadeBlock";
import StatsBlock from "./StatsBlock";
import { AdvancedImageBlock } from "./AdvancedImageBlock";
import { cn } from "@/lib/utils";

interface IBlock {
  children?: React.ReactNode
  className?: string
  options?: AdvancedImageBlockType['options'] | HeroBlockType['options'] | ContentBlockType['options'] | CarouselBlockType['options'] | SlideshowBlockType['options'] | Bento2BlockType['options'] | GalleryBlockType['options'] | TestimonialBlock['options'] | LogoParadeBlockType['options'] | StatsBlockType['options'] | CallToActionBlockType['options']
}

enum ThemeClasses {
  DEFAULT = "prose max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-balance prose-h2:text-4xl prose-h3:text-2xl prose-h3:font-sans prose-h3:tracking-tight prose-h4:text-4xl prose-h5:text-xl prose-h6:text-lg",
  HOME = "prose max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-balance prose-headings:text-5xl prose-h3:text-4xl prose-h4:text-4xl prose-h5:text-xl prose-h6:text-lg prose-p:first-of-type:text-2xl prose-p:text-lg prose-p:leading-normal prose-ul:list-disc prose-ul:pl-4 prose-ol:list-decimal prose-ol:pl-4 prose-li:text-lg prose-li:leading-normal prose-li:text-balance",
  FEATURES = "prose prose-2xl theme-features max-w-none"
}

const Block = ({ children, className, options }: IBlock) => {
  const themeClass = options && 'theme' in options ? ThemeClasses[options.theme as keyof typeof ThemeClasses] || null : null;
  console.log({
    options,
    theme: options && 'theme' in options ? options.theme : undefined,
    themeClass: options && 'theme' in options ? ThemeClasses[options.theme as keyof typeof ThemeClasses] || null : null
  });
  return <div id={uuidv4()} className={cn(
    "w-full",
    themeClass,
    className
  )}>{children}</div>
}

export const components = {
  types: {
    image: ({ value }: { value: IImageBlockProps }) => {
      return (
        <Block {...value}>
          <ImageBlock {...value} />
        </Block>
      );
    },
    advancedImage: ({ value }: { value: AdvancedImageBlockType }) => {
      return (
        <Block {...value}>
          <AdvancedImageBlock {...value} />
        </Block>
      );
    },
    featuresBlock: ({ value }: { value: FeaturesBlockType }) => {
      return (
        <Block options={value?.options}>
          <FeaturesBlock {...value} />
        </Block>
      );
    },
    slideshowBlock: ({ value }: { value: SlideshowBlockType }) => {
      return value && (
        <Block options={value?.options}>
          <SlideshowBlock {...value} />
        </Block>
      )
    },
    bento2Block: ({ value }: { value: Bento2BlockType }) => {
      return value && (
        <Block options={value?.options}>
          <Bento2Block {...value} />
        </Block>
      )
    },
    youtubeBlock: async ({ value }: { value: YoutubeBlockType }) => {
      return (
        <Block className="aspect-video mx-auto mb-16 max-w-[640px]">
          <YouTube value={value} />
        </Block>
      );
    },
    galleryBlock: ({ value }: { value: GalleryBlockType }) => {
      return (
        <Block options={value?.options}>
          <GalleryBlock value={value} />
        </Block>
      );
    },
    testimonialBlock: ({ value }: { value: TestimonialBlock }) => {
      return (
        <Block options={value?.options}>
          <TestimonialBlockComponent value={value} />
        </Block>
      );
    },
    carouselBlock: ({ value }: { value: CarouselBlockType }) => {
      return (
        <Block options={value?.options}>
          <CarouselBlock value={value} />
        </Block>
      );
    },
    heroBlock: ({ value }: { value: HeroBlockType }) => {
      return (
        <Block options={value?.options}>
          <HeroBlock value={value} />
        </Block>
      );
    },
    contentBlock: ({ value }: { value: ContentBlockType }) => {
      return (
        <Block options={value?.options}>
          <ContentBlock value={value} />
        </Block>
      );
    },
    callToActionBlock: ({ value }: { value: CallToActionBlockType }) => {
      return (
        <Block options={value?.options}>
          <CallToActionBlock value={value} />
        </Block>
      );
    },
    logoParadeBlock: ({ value }: { value: LogoParadeBlockType }) => {
      return (
        <Block options={value?.options}>
          <LogoParadeBlock value={value} />
        </Block>
      );
    },
    statsBlock: ({ value }: { value: StatsBlockType }) => {
      return (
        <Block options={value?.options}>
          <StatsBlock value={value} />
        </Block>
      );
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
          className="underline underline-offset-2 whitespace-wrap break-all text-primary"
          target={target}
        >
          {children}
        </a>
      );
    },
  },
};
