/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type AdvancedImage = {
  _type: 'advancedImage'
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  metadata?: {
    alt?: string
    title?: string
    caption?: string
    credit?: string
  }
  options?: {
    width?: number
    height?: number
    circle?: boolean
    figure?: boolean
  }
}

export type CallToActionBlock = {
  _type: 'callToActionBlock'
  body?: Array<
    | {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      media?: unknown
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
      _key: string
    }
    | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
    | ({
      _key: string
    } & CarouselBlock)
    | ({
      _key: string
    } & ContentBlock)
    | ({
      _key: string
    } & YoutubeBlock)
    | ({
      _key: string
    } & FeaturesBlock)
    | ({
      _key: string
    } & Bento2Block)
    | ({
      _key: string
    } & SlideshowBlock)
    | ({
      _key: string
    } & GalleryBlock)
    | ({
      _key: string
    } & TestimonialBlock)
    | ({
      _key: string
    } & HeroBlock)
    | ({
      _key: string
    } & LogoParadeBlock)
    | ({
      _key: string
    } & StatsBlock)
    | ({
      _key: string
    } & CallToActionBlock)
    | ({
      _key: string
    } & AdvancedImage)
  >
  formDisplay?: 'inline' | 'modal'
  buttonText?: string
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
  }
}

export type StatsBlock = {
  _type: 'statsBlock'
  title?: string
  stats?: Array<{
    value?: string
    title?: string
    _type: 'stat'
    _key: string
  }>
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
  }
}

export type LogoParadeBlock = {
  _type: 'logoParadeBlock'
  images?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
  }
}

export type HeroBlock = {
  _type: 'heroBlock'
  valueProposition?: Array<
    | {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      media?: unknown
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
      _key: string
    }
    | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
    | ({
      _key: string
    } & CarouselBlock)
    | ({
      _key: string
    } & ContentBlock)
    | ({
      _key: string
    } & YoutubeBlock)
    | ({
      _key: string
    } & FeaturesBlock)
    | ({
      _key: string
    } & Bento2Block)
    | ({
      _key: string
    } & SlideshowBlock)
    | ({
      _key: string
    } & GalleryBlock)
    | ({
      _key: string
    } & TestimonialBlock)
    | ({
      _key: string
    } & HeroBlock)
    | ({
      _key: string
    } & LogoParadeBlock)
    | ({
      _key: string
    } & StatsBlock)
    | ({
      _key: string
    } & CallToActionBlock)
    | ({
      _key: string
    } & AdvancedImage)
  >
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
  }
}

export type TestimonialBlock = {
  _type: 'testimonialBlock'
  quote?: string
  author?: {
    name?: string
    title?: string
    image?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      media?: unknown
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
  }
  rating?: number
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
  }
}

export type GalleryBlock = {
  _type: 'galleryBlock'
  title?: string
  images?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
  }
}

export type SlideshowBlock = {
  _type: 'slideshowBlock'
  title?: string
  description?: string
  images?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
    autoplay?: boolean
    interval?: number
  }
}

export type Bento2Block = {
  _type: 'bento2Block'
  heading?: {
    text?: string
    level?: 1 | 2 | 3 | 4 | 5 | 6
  }
  left?: Array<
    | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
    | ({
      _key: string
    } & AdvancedImage)
  >
  right?: Array<
    | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
    | ({
      _key: string
    } & AdvancedImage)
  >
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
    offset?: boolean
    reverse?: boolean
  }
}

export type FeaturesBlock = {
  _type: 'featuresBlock'
  heading?: string
  features?: Array<{
    icon?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      media?: unknown
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    title?: string
    description?: string
    _key: string
  }>
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
    columns?: number
  }
}

export type YoutubeBlock = {
  _type: 'youtubeBlock'
  url?: string
}

export type ContentBlock = {
  _type: 'contentBlock'
  content?: Array<
    | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
      listItem?: 'bullet' | 'number'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
    | ({
      _key: string
    } & AdvancedImage)
  >
  align?: 'start' | 'center' | 'end'
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
  }
}

export type CarouselBlock = {
  _type: 'carouselBlock'
  title?: string
  images?: Array<{
    image?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      media?: unknown
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    body?: Array<
      | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
      | ({
        _key: string
      } & AdvancedImage)
    >
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    _key: string
  }>
  autoplay?: boolean
  options?: {
    id?: string
    textSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
    vAlign?: 'top' | 'center' | 'bottom'
    theme?: 'DEFAULT' | 'HOME' | 'FEATURES'
    useLandingPageStyles?: boolean
  }
}

export type TextSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type Settings = {
  _id: string
  _type: 'settings'
  _createdAt: string
  _updatedAt: string
  _rev: string
  siteTitle?: string
  siteDescription?: string
  siteLogo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  navigation?: {
    desktop?: Array<{
      label?: string
      url?: string
      _type: 'item'
      _key: string
    }>
    mobile?: Array<{
      label?: string
      url?: string
      _type: 'item'
      _key: string
    }>
    footer?: Array<{
      label?: string
      url?: string
      _type: 'item'
      _key: string
    }>
  }
  organizations?: Array<{
    label?: string
    name?: string
    businessType?:
    | 'AnimalShelter'
    | 'ArchiveOrganization'
    | 'AutomotiveBusiness'
    | 'ChildCare'
    | 'Dentist'
    | 'DryCleaningOrLaundry'
    | 'Electrician'
    | 'EmergencyService'
    | 'EmploymentAgency'
    | 'EntertainmentBusiness'
    | 'FinancialService'
    | 'FoodEstablishment'
    | 'GovernmentOffice'
    | 'HealthAndBeautyBusiness'
    | 'HomeAndConstructionBusiness'
    | 'InternetCafe'
    | 'LegalService'
    | 'Library'
    | 'LodgingBusiness'
    | 'MedicalBusiness'
    | 'ProfessionalService'
    | 'RadioStation'
    | 'RealEstateAgent'
    | 'RecyclingCenter'
    | 'SelfStorage'
    | 'ShoppingCenter'
    | 'SportsActivityLocation'
    | 'Store'
    | 'TelevisionStation'
    | 'TouristInformationCenter'
    | 'TravelAgency'
    homepage?: string
    address?: {
      street1?: string
      street2?: string
      city?: string
      state?: string
      zip?: string
    }
    phone?: string
    email?: string
    gallery?: Array<{
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      media?: unknown
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
      _key: string
    }>
    _type: 'organization'
    _key: string
  }>
}

export type BasicBlockContent = Array<
  | {
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }
  | ({
    _key: string
  } & AdvancedImage)
>

export type BlockContent = Array<
  | {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }
  | {
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }
  | ({
    _key: string
  } & CarouselBlock)
  | ({
    _key: string
  } & ContentBlock)
  | ({
    _key: string
  } & YoutubeBlock)
  | ({
    _key: string
  } & FeaturesBlock)
  | ({
    _key: string
  } & Bento2Block)
  | ({
    _key: string
  } & SlideshowBlock)
  | ({
    _key: string
  } & GalleryBlock)
  | ({
    _key: string
  } & TestimonialBlock)
  | ({
    _key: string
  } & HeroBlock)
  | ({
    _key: string
  } & LogoParadeBlock)
  | ({
    _key: string
  } & StatsBlock)
  | ({
    _key: string
  } & CallToActionBlock)
  | ({
    _key: string
  } & AdvancedImage)
>

export type LandingPageContent = Array<
  | {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }
  | ({
    _key: string
  } & CarouselBlock)
  | ({
    _key: string
  } & ContentBlock)
  | ({
    _key: string
  } & YoutubeBlock)
  | ({
    _key: string
  } & FeaturesBlock)
  | ({
    _key: string
  } & Bento2Block)
  | ({
    _key: string
  } & SlideshowBlock)
  | ({
    _key: string
  } & GalleryBlock)
  | ({
    _key: string
  } & TestimonialBlock)
  | ({
    _key: string
  } & HeroBlock)
  | ({
    _key: string
  } & LogoParadeBlock)
  | ({
    _key: string
  } & StatsBlock)
  | ({
    _key: string
  } & CallToActionBlock)
  | ({
    _key: string
  } & AdvancedImage)
>

export type Page = {
  _id: string
  _type: 'page'
  _createdAt: string
  _updatedAt: string
  _rev: string
  date?: string
  title?: string
  slug?: Slug
  description?: string
  template?: 'default' | 'landing'
  defaultContent?: BlockContent
  landingContent?: LandingPageContent
  gallery?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
}

export type Home = {
  _id: string
  _type: 'home'
  _createdAt: string
  _updatedAt: string
  _rev: string
  date?: string
  title?: string
  description?: string
  template?: 'default' | 'landing'
  defaultContent?: BlockContent
  landingContent?: LandingPageContent
  gallery?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Tags = Array<
  {
    _key: string
  } & Tag
>

export type Tag = {
  _type: 'tag'
  value?: string
  label?: string
}

export type MediaTag = {
  _id: string
  _type: 'media.tag'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: Slug
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}
export declare const internalGroqTypeReferenceTo: unique symbol
