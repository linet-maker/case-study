import Image from "next/image";
import me from "@/public/img/samm.jpg";

export const Hello = () => {
  return (
    <div className="post-list post-content over-scroll-top">
      <div className="post-data">
        <p>
          Hello there! Welcome to <b>note</b>, a platform i use to
          share relevant projects. I’m <b>サム</b>-(Samwel muiruri), a
          creative and collaborative person who loves to share code
          and ideas with others. ⚡ <br />
          As a Creative developer, I can combine my technical
          expertise and artistic aspects, to create effective digital
          solutions. <br />I major on{" "}
          <a
            className={"about-info"}
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            Javascript
          </a>{" "}
          programming language and popular frontend web frameworks
          such as
          <a className={"about-info"} href="https://react.dev/">
            {" "}
            ReactJs
          </a>
          ,
          <a className={"about-info"} href="https://nextjs.org/">
            {" "}
            NextJs{" "}
          </a>{" "}
          and
          <a className={"about-info"} href="https://nextjs.org/">
            {" "}
            Vite{" "}
          </a>
          .
          <br />
          I’m a{" "}
          <a
            className={"about-info"}
            href="https://en.wikipedia.org/wiki/Newbie">
            noob
          </a>{" "}
          in both{" "}
          <a className={"about-info"} href="https://nodejs.org/en">
            {" "}
            nodeJs{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://ru.wikipedia.org/wiki/C%2B%2B"
            className={"about-info"}>
            {" "}
            C++
          </a>
          . Currently I favor headless cms systems such as
          <a className={"about-info"} href="https://www.sanity.io/">
            {" "}
            sanity
          </a>
          ,
          <a href="https://clerk.com/" className={"about-info"}>
            {" "}
            clerk
          </a>
          , and
          <a href="https://medusajs.com/" className={"about-info"}>
            {" "}
            medusa
          </a>
          . I also utilize database tools such as
          <a href="https://www.prisma.io/" className={"about-info"}>
            {" "}
            prisma <b>[orm] </b>
          </a>
          ,
          <a
            href="https://en.wikipedia.org/wiki/SQL"
            className={"about-info"}>
            {" "}
            sql{" "}
          </a>{" "}
          and{" "}
          <a href="https://www.mongodb.com/" className={"about-info"}>
            {" "}
            mongo{" "}
          </a>{" "}
          for my backend needs.
          <br />
          Aside From my geeky side of things, i Love manipulating
          graphics especially for <b>webGL</b> i.e web graphics, using{" "}
          <br />
          <a href="https://www.foundry.com/products/modo">
            <b>modo</b>,{" "}
          </a>
          <a href="https://www.blender.org/">
            <b>blender</b>,{" "}
          </a>
          <a href="https://www.adobe.com/africa/products/photoshop/landpb.html">
            {" "}
            <b>photoshop</b>,{" "}
          </a>
          <a
            href="https://skylum.com/luminar-ai"
            className={"about-info"}>
            <b>Luminar</b>,{" "}
          </a>
          <a href="https://threejs.org/">
            {" "}
            <b> js libraries,</b>{" "}
          </a>{" "}
          for advanced web motions.
          <br />
          Currently am working on a <b> personal </b> project. I'm
          working on levaraging <b> ai </b> to streamline learning in{" "}
          <b> tvet </b> institutions using an
          <b> saas </b> platform{" "}
          <a
            href="https://github.com/samm-waturu/saas"
            target="_blank"
            className={"about-info"}>
            {" "}
            <b>[ github ]</b>{" "}
          </a>
          .
          <br />
          <b>click to </b>view an alt
          <a
            href="https://samm-waturu.github.io/GIT-pages/"
            target="_blank"
            className={"about-info"}>
            {" "}
            [ experimental ]{" "}
          </a>
          portfolio using{" "}
          <a className={"about-info"} href="https://nextjs.org/">
            {" "}
            vite{" "}
          </a>
          .
          <br />
          <b>click to </b>view my portfolio
          <a href="/" className={"about-info"}>
            {" "}
            [ projects ]{" "}
          </a>
          .
        </p>

        <div className="author-box">
          <Image src={me} alt={"Am samm"} width={100} height={100} />
        </div>
      </div>
    </div>
  );
};
