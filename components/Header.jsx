'use client';

import { Montserrat } from 'next/font/google';

const montFont = Montserrat({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '600', '800'],
});

export const Header = () => {
  return (
    <>
      <div>
        <header className="header-block row navbar-fixed-top shadow">
          <div className="blog-title">
            <h1 className={montFont.className}>note.</h1>
          </div>
        </header>
      </div>
    </>
  );
};
