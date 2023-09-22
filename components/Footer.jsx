import Link from "next/link";
import { Radley } from "next/font/google";

const radFont = Radley({ subsets: ["latin"], weight: "400" });

const fetchYear = new Date().getFullYear();
export const Footer = ({ fixedState, smallText, blur }) => {
  return (
    <>
      {/*this is the home page posts*/}
      <div className={radFont.className}>
        <section className={`footer ${fixedState} ${blur}`}>
          <div className="footer-inner row">
            <div className="col-md-12">
              <p className="description">{smallText}</p>
            </div>
            <div className="col-md-12">
             {/* <Link className={"footer-links"} href={"/"}>
                Home
              </Link>*/}

              <Link className={"footer-links"} href={"/contact"}>
                contact
              </Link>
              <a
                href={"https://github.com/samm-waturu"}
                target="_blank"
                rel="noopener">
                github
              </a>
            </div>
          </div>
          <section className="copyright"> © {fetchYear}</section>
        </section>
      </div>
    </>
  );
};
