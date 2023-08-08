import HomePage from './home'
import {getAllPosts} from "@/sanity/lib/client";

export default async function IndexPage() {
    const posts = await getAllPosts();
    return <HomePage posts={posts} />
}
export const revalidate = 60;

