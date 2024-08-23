import Link from 'next/link';
import { Radley } from 'next/font/google';

const radFont = Radley({ subsets: ['latin'], weight: '400' });

const fetchYear = new Date().getFullYear();
export const Footer = ({ fixedState, smallText, blur }) => {
  return (
    <>
      {/*this is the home page posts*/}
      <div className={radFont.className}>
        <section className={`footer ${fixedState} ${blur}`}>
          <div className="footer-inner row">
            <div className="col-md-12" style={{textAlign: "center"}}>
              {smallText === "🇯🇵" ? ( <Link className={'footer-links'} href={'/jp'}>
                {"🇯🇵"}
              </Link>) : (
                <Link className={'footer-links'} href={'/eng'}>{"🇬🇧"}</Link>
              ) }

            </div>
          </div>
          {/*<section className="copyright">&copy; {fetchYear}</section>*/}
        </section>
      </div>
    </>
  );
};