import '../../globals.css';
import { Radley } from 'next/font/google';

const radFont = Radley({ subsets: ['latin'], weight: '400' });
export const metadata = {
  title: 'about me',
  description: '',
};
export default function AboutLayout({ children }) {
  return <section className={radFont.className}>{children}</section>;
}
