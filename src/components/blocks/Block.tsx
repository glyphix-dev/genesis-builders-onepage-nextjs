"use client"

import * as React from 'react';
import { motion } from "motion/react"

import type {
  AdvancedImage as AdvancedImageBlockType,
  AdvancedListBlock as AdvancedListBlockType,
  ContentBlock as ContentBlockType,
  HeroBlock as HeroBlockType,
  CarouselBlock as CarouselBlockType,
  SlideshowBlock as SlideshowBlockType,
  Bento2Block as Bento2BlockType,
  GalleryBlock as GalleryBlockType,
  CallToActionBlock as CallToActionBlockType,
  LogoParadeBlock as LogoParadeBlockType,
  StatsBlock as StatsBlockType,
  TestimonialBlock as TestimonialBlockType,
} from "@/types/types.sanity";
import { cn } from '@/lib/utils';
import Container from '@/components/Container';

const ThemeClasses = {
  DEFAULT: "prose max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-balance prose-h2:text-4xl prose-h3:text-2xl prose-h3:font-sans prose-h4:text-4xl prose-h5:text-xl prose-h6:text-lg",
  HOME: cn(
    "prose prose-spacing-normal max-w-none",
    "prose-headings:font-serif prose-headings:font-normal prose-headings:text-balance",
    "prose-headings:text-center prose-headings:sm:text-inherit prose-headings:mb-4",
    "prose-h1:text-6xl prose-h1:sm:text-7xl",
    "prose-h2:text-5xl prose-h2:sm:text-5xl",
    "prose-h3:text-2xl prose-h3:sm:text-4xl",
    "prose-h4:text-xl prose-h4:sm:text-4xl",
    "prose-h5:text-lg  prose-h5:sm:text-2xl",
    "prose-h6:text-base prose-h6:sm:text-xl",
    "prose-p:first-of-type:text-xl prose-p:first-of-type:xs:text-2xl prose-p:first-of-type:sm:text-2xl",
    "prose-p:text-base prose-p:leading-normal",
    "prose-ul:list-disc prose-ul:pl-4 prose-ol:list-decimal prose-ol:pl-4 prose-li:text-lg prose-li:leading-normal prose-li:text-balance"
  ),
  FEATURES: cn(
    "prose prose-2xl theme-features max-w-none",
    "prose-headings:text-left prose-headings:sm:text-center prose-headings:font-normal",
    "prose-h1:text-6xl prose-h1:sm:text-7xl prose-h1:font-serif prose-h1:text-center",
    "prose-h2:text-4xl prose-h2:sm:text-6xl prose-h2:font-serif prose-h2:text-center",
    "prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:font-sans prose-h3:font-bold",
    "prose-h4:text-xl prose-h4:sm:text-4xl prose-h4:font-sans",
    "prose-h5:text-lg  prose-h5:sm:text-2xl prose-h5:font-sans",
    "prose-h6:text-base prose-h6:sm:text-xl prose-h6:font-sans",
    "prose-p:text-base prose-p:leading-normal prose-p:text-left prose-p:sm:text-center",
  )
}

enum BlockThemes {
  DEFAULT = "bg-transparent text-foreground",
  PRIMARY = "bg-primary text-primary-foreground prose-headings:text-primary-foreground prose-p:text-primary-foreground p-block",
  SECONDARY = "bg-secondary text-secondary-foreground prose-headings:text-secondary-foreground prose-p:text-secondary-foreground p-block",
  MUTED = "bg-muted text-muted-foreground prose-headings:text-muted-foreground prose-p:text-muted-foreground p-block",
  ACCENT = "bg-accent text-accent-foreground prose-headings:text-accent-foreground prose-p:text-accent-foreground p-block",
}

interface IBlockProps {
  type?:
  'advancedImage' |
  'advancedList' |
  'hero' | 'content' | 'carousel' | 'slideshow' | 'bento2' | 'gallery' | 'testimonial' | 'logoParade' | 'stats' | 'callToAction' | 'youtube' | 'twoColumnList' | 'features' | 'imageGrid'
  children?: React.ReactNode
  className?: string
  options?:
  AdvancedImageBlockType['options'] |
  AdvancedListBlockType['options'] |
  Bento2BlockType['options'] |
  CallToActionBlockType['options'] |
  CarouselBlockType['options'] |
  ContentBlockType['options'] |
  GalleryBlockType['options'] |
  HeroBlockType['options'] |
  LogoParadeBlockType['options'] |
  SlideshowBlockType['options'] |
  TestimonialBlockType['options'] |
  StatsBlockType['options'] |
  null
}

const Block: React.FunctionComponent<IBlockProps> = ({ children, className, options, type }) => {
  const themeClass = options && 'theme' in options ? ThemeClasses[options.theme as keyof typeof ThemeClasses] || ThemeClasses['DEFAULT'] : ThemeClasses['DEFAULT'];
  const blockTheme = options && 'blockTheme' in options ? BlockThemes[options.blockTheme as keyof typeof BlockThemes] || BlockThemes['DEFAULT'] : BlockThemes['DEFAULT'];

  const fullWidth = options && 'bgFullWidth' in options && options.bgFullWidth ? "w-screen relative left-1/2 -translate-x-1/2" : "";

  return type && !["advancedImage", "hero", "youtube"].includes(type) ? (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.75 }}
      viewport={{ once: true }}
      id={options && 'id' in options ? options.id : ""}
      className={cn(
        "w-full",
        themeClass,
        blockTheme,
        fullWidth,
        className
      )}>
      <Container>
        {children}
      </Container>
    </motion.div>) : (
    <div
      id={options && 'id' in options ? options.id : ""}
      className={cn(
        "w-full",
        themeClass,
        blockTheme,
        fullWidth,
        className
      )}>
      <Container>
        {children}
      </Container>
    </div>
  )
};

export default Block;
