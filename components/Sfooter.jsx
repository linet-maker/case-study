import Link from 'next/link';
import { Radley } from 'next/font/google';

const radFont = Radley({ subsets: ['latin'], weight: '400' });

const fetchYear = new Date().getFullYear();
export const Sfooter = () => {
  return (
    <>
      <>
        {/*this is the home page posts*/}
        <div className={radFont.className}>
          <section className="footer">
            <div className="footer-inner row">
              <div className="col-md-12">
                <p className="description">note.</p>
              </div>
              <div className="col-md-12">
                <Link className={'footer-links'} href={'/'}>
                  home
                </Link>
                <Link className={'footer-links'} href={'/contact'}>
                  contact
                </Link>
                <a
                  href={'https://github.com/samm-waturu'}
                  target="_blank"
                  rel="noopener"
                >
                  github
                </a>
              </div>
            </div>
          </section>
          <section className="copyright"> © {fetchYear}</section>
        </div>
      </>
    </>
  );
};
