import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"], weight: ["400", "600", "800"] });

export default function FalseRoute({children}) {
  return (
    <section>
      <div className={mont.className}>
        {children}
      </div>
    </section>
  )
}