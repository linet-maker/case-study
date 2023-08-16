import { Radley } from "next/font/google";

const radFont = Radley({ subsets: ["latin"], weight: "400" });
export const metadata = {
  title: "Contact me",
  description: "A little bit of contact info here"
};
export default function ContactLayout({ children }) {
  return (
    <section className={radFont.className}>
      {children}
    </section>
  );
}