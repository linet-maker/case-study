'use client';

import { Radley } from 'next/font/google';
import getDaySuffix from '@/util';

const radFont = Radley({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
});

// Day format

let date = new Date().getDate();
let suffixDate = getDaySuffix(date);
let option = { month: 'long' };
let month = new Date().toLocaleString('en-us', option);
let monthShort = month.slice(0, 3);
let year = new Date().getFullYear();
let autoDate = `${suffixDate}/${monthShort}/${year}`;

export function Default() {
  // Passing props to this component from my home page
  return (
    <>
      <div className={radFont.className}>
        <div className="col-xs-12 col-sm-12 col-lg-12 post-line">
          <span className="post-titles">
            <a href="/hello">
              <h1>about ⚡</h1>
            </a>
            <p className={'onHover'}>Read me first</p>
          </span>
          <div></div>
        </div>
      </div>
    </>
  );
}
