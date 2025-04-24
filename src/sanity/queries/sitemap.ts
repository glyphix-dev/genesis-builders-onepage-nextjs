import type { SanityNextQueries } from "../../types/types.custom"

export default {
  links: `{
      "home": *[_type == "home"]{
        title,
        slug,
        description,
        "path": ""
      },
      "pages": *[_type == "page"]{
        title,
        slug,
        description,
        "path": ""
      },
      "posts": *[_type == "post"]{
        title,
        slug,
        description,
        "path": "blog"
      }
    }`,
} as const satisfies SanityNextQueries
