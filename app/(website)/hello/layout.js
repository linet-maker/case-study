import { Radley } from 'next/font/google';

const radFont = Radley({ subsets: ['latin'], weight: '400' });
export const metadata = {
  title: 'about me',
  description: 'a brief description about samm',
};

export default function AboutLayout({ children }) {
  return <section className={radFont.className}>{children}</section>;
}
