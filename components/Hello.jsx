import Link from 'next/link';

import { Radley } from 'next/font/google';
const radFont = Radley({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
});
import { Montserrat } from 'next/font/google';

const montFont = Montserrat({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '600', '800'],
});

export const Hello = () => {
  return (
      <section className="post-list post-content">
        <div className="post-data">
          <p>
            Welcome to <b>note</b>, where I share my projects as a <b>junior full-stack developer</b> passionate about
            code and ideas. I combine technical skills with creativity to craft digital experiences. ⚡
          </p>
          <p>
            My expertise lies in <b>JavaScript (JS)</b>, with a focus on server-side and backend libraries. I work
            with <b>React</b>, <b>Next.js</b>, <b>MongoDB</b>, <b>Prisma</b>, <b>Sanity</b>, <b>ngrok</b>, <b>Docker</b>,
            and <b>Linux</b> to build full-stack applications.
          </p>
          <p>
            Outside of coding, I blend layouts, typography, and 3D elements using <b>Photoshop CC</b>, <b>Blender</b>,
            and <b>Three.js</b>.
          </p>
          <p>
            Currently, I'm working on an <b>AI</b> project focused on personalized learning experiences. <br />
            Check out my <Link target="_blank" href="/"> <b>Projects</b></Link>.
          </p>
        </div>
      </section>
  );
};
