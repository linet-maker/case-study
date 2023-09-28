import Image from "next/image";
import me from "@/public/img/samm.jpg";

export const Hello = () => {
  return (
    <div className="post-list post-content over-scroll-top">
      <div className="post-data">
        <p>
          Hello there! Welcome to{" "}
          <b>
            <i>note</i>
          </b>
          , a platform i use to share my relevant projects. I’m{" "}
          <b>samm</b>, a creative and collaborative person who loves
          to share code and ideas with others. I combine my technical
          expertise and artistic aspects, to create effective digital
          experiences. ⚡
          <br />
          <br />I major on{" "}
          <a
            className={"about-info"}
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <b>Javascript (JS)</b>,{" "}
          </a>{" "}
          a programming language mainly used to <i>program</i> the web. With
          it comes a vast set of tools and frameworks, such as
          <a
            className={"about-info"}
            target="_blank"
            href="https://www.prisma.io/">
            {" "}
            <b>Prisma</b>
          </a>
          ,{" "}
          <a
            className={"about-info"}
            target="_blank"
            href="https://www.sanity.io/">
            {" "}
            <b>Sanity</b>
          </a>
          ,{" "}
          <a
            className={"about-info"}
            target="_blank"
            href="https://react.dev/">
            {" "}
            <b>React Js</b>
          </a>{" "}
          and{" "}
          <a
            className={"about-info"}
            target="_blank"
            href="https://nextjs.org/">
            {" "}
            <b>Next Js</b>
          </a>
          , of which enables me to build <i>fullstack</i> web apps.
          <br />

          <br />
          I spend most of my time blending layouts and typography with images and 3D art.
          To achieve desired results, i use tools such as{" "}
          <a
            className="about-info"
            target="_blank"
            href="https://www.adobe.com/africa/products/photoshop/landpb.html">
            {" "}
            <b>photoshop cc</b> {" "}
          </a>and{" "}
          <a
            className="about-info"
            target="_blank"
            href="https://www.blender.org/">
            <b>blender</b>.{" "}
          </a>{" "}
          JS libraries include:
          <a className="about-info" href="https://threejs.org/">
            {" "}
            <b> Three Js</b>{" "}
          </a>{" "}

          <br />
          <br />
          Currently am on <i>school break</i>, working on a personal project
          <a
            href="https://github.com/samm-waturu/saas"
            target="_blank"
            className={"about-info"}>
            {" "}
            <b>GitHub</b>.
          </a>{" "}

          Click{" "}

          to view my <a href="https://samm-web.vercel.app">
          <b>
            projects
          </b>
          </a>


        </p>

        <div className="author-box">
          <Image src={me} alt={"Am samm"} width={100} height={100} />
        </div>
      </div>
    </div>
  );
};
