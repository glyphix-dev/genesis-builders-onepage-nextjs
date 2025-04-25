import { SanityNextQueries } from "@/types/types.custom";

export default {
  all: `*[_type == "settings"][0]{
        ...,
      }`,
  siteTitle: `*[_type == "settings"][0].siteTitle`,
  logo: `{
    "logo": *[_type == "settings"][0].siteLogo{
      ...,
      "alt": asset->.altText,
      "src": asset->.url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height,
    },
    "title": *[_type == "settings"][0].siteTitle
  }
      `,
  mainMenu: `*[_type == "settings"][0]{
    "nav": navigation.desktop,
    "showCTA": navigation.showCTA
  }`,
  mobileMenu: `*[_type == "settings"][0]{
    "nav": navigation.mobile,
    "showCTA": navigation.showCTA
  }`,
  footerMenu: `*[_type == "settings"][0].navigation.footer`,
} as const satisfies SanityNextQueries
