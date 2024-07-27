import { groq } from 'next-sanity';

// Get all posts
export const postQuery = groq`
*[_type == 'post'] | order(publishedAt asc) {_id, title, slug, excerpt, publishedAt}
`;

// Paths for generateStaticParams
export const pathQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
//
// Single Post
export const singleQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
   ...,
  author->,
  categories[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
}
`;
