import Image from 'next/image';
import me from '@/public/img/samm.jpg';
import Link from 'next/link';

export const Hello = () => {
  return (
    <div className="post-list post-content over-scroll-top">
      <div className="post-data">
        <p>
          Hello there! Welcome to <b>note</b>, a platform where I share my relevant projects.
          I’m a <b>junior full-stack web developer</b> who loves to share code and ideas with others.
          I combine my technical expertise and artistic skills to create effective digital experiences.⚡
          <br />
        </p>
        <p>
          I specialize in <b>JavaScript (JS)</b>, focusing on its server-side and <b>backend libraries</b>.
          I currently use tools and frameworks such as <b>React</b>, <b>Next.js</b>, <b>MongoDB,</b> <b>Prisma</b>, <b>Sanity</b>, <b>ngrok</b>, <b>Docker</b>, and
          <b> Linux</b>, enabling me to build comprehensive <b>full-stack web applications</b>.
          <br />
        </p>

        <p>
            Apart from coding, I spend most of my time blending layouts and typography with images and 3D elements. To
            achieve desired results, I use tools such as <b>Photoshop CC</b> and <b>Blender</b>.
            I also experiment with <b>JavaScript</b> libraries like <b>Three.js</b> for <b>3D modeling</b>.
            Currently.
          <br/>
          </p>
        <p>
          I am currently working on a personal project revolving around <b>AI</b> and <b>large models</b> in education,
          exploring the latest trends and advancements in <b>AI-driven educational</b> tools and personalized learning experiences.
          <br/>
          <br/>
          Click to view my <Link target={"_blank"} href={"/"}> <b>Projects</b></Link>
        </p>
      </div>
    </div>
  );
};
