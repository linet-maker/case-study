import PostPage from './base';

import { getAllPostsSlugs, getPostBySlug } from '@/sanity/lib/client';

export async function generateStaticParams() {
  return await getAllPostsSlugs();
}

// Automatically change the page title with slug
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return { title: post.title };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

export const revalidate = 7;
