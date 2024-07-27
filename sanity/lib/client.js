import { createClient } from 'next-sanity';
import { pathQuery, postQuery, singleQuery } from '@/sanity/groq';
import { apiVersion, dataset, projectId, useCdn } from '../env';

if (!projectId) {
  console.error(
    'The Sanity Project ID is not set. Check your environment variables.'
  );
}
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

// GroQL queries are exported from here

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};
export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postQuery)) || [];
  }
  return [];
}
export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathQuery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}
export async function getPostBySlug(slug) {
  if (client) {
    return (await client.fetch(singleQuery, { slug })) || {};
  }
  return {};
}
