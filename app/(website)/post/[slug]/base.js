import { Header } from '@/components/Header';
import { Sfooter } from '@/components/Sfooter';
import { notFound } from 'next/navigation';
import { Post } from '@/components/post';

export default function SinglePost({ post }) {
  const slug = post?.slug;
  if (!slug) {
    notFound();
  }
  return (
    <>
      <Header />

      <Post post={post} />

      <Sfooter />
    </>
  );
}
