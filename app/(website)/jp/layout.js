import 'bootstrap/dist/css/bootstrap.css';
import '../../globals.css';
import { Zen_Kaku_Gothic_Antique } from 'next/font/google';
const zenFont = Zen_Kaku_Gothic_Antique({ subsets: ['latin'], weight: ['300'] });

export const metadata = {
  // Story
  // Whispers of the Vanishing Master
  title: 'ものがたり',
  description: '消えゆく師範のささやき'
};
export default function JpLayout({ children }) {
  return (
    <section className={zenFont.className}>{children}</section>
  );
}