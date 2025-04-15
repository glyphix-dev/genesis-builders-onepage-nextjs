export type SanityReference = {
  _ref: string
  _type: 'reference'
  _weak?: boolean
}

export type SanityNextQueries = {
  [key: string]: string
}

export interface PageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{
    sortOrder?: string,
    page?: string | number | null
    s?: string | null
  }>
}

export type QueryImage = {
  alt: string;
  src: string;
  width: number;
  height: number;
}

export enum NextRoutes {
  Page = "",
  Post = "/blog",
}

export enum SanityDocumentTypes {
  Page = "page",
  Post = "post",
}

export type CustomImageFields = {
  altText?: string
  description?: string
  opt?: {
    media?: {
      tags?: SanityReference[]
    }
  }
  title?: string
}

export enum TextSize {
  sm = 'prose-sm',
  md = 'prose-base',
  lg = 'prose-lg',
  xl = 'prose-xl',
  '2xl' = 'prose-2xl',
}