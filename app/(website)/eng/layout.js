import 'bootstrap/dist/css/bootstrap.css';
import '../../globals.css';
import { Zen_Kaku_Gothic_Antique } from 'next/font/google';
const zenFont = Zen_Kaku_Gothic_Antique({ subsets: ['latin'], weight: ['300'] });

export const metadata = {
  title: 'Story',
  description: 'Whispers of the Vanishing Master'
};
export default function EnLayout({ children }) {
  return (
    <section className={zenFont.className}>{children}</section>
  );
}