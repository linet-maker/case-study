import Image from "next/image";
import me from "@/public/img/samm.jpg";

export const Hello = () => {
  return (
    <>
      <div className="post-list post-content over-scroll-top">

        <div className="post-data">

          <p>
            Hello there! Welcome to <b>note</b>, a platform i use to share relevant projects.
            I’m  <b>サム</b>, a creative and collaborative person who loves to share code and ideas
            with others. ⚡ <br />

            As a creative developer, I can combine my technical expertise and artistic aspects, to create
            effective digital solutions. <br />

            I major on <a className={"about-info"}href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a> programming language and popular frontend web frameworks such as
            <a className={"about-info"} href="https://react.dev/"> ReactJs</a>,
            <a className={"about-info"} href="https://nextjs.org/"> NextJs </a> and
             <a className={"about-info"} href="https://nextjs.org/"> Vite </a>.
            These are awesome tools for building modern and dynamic web applications. <br />

            I’m a <a className={"about-info"} href="https://en.wikipedia.org/wiki/Newbie">noob</a> in both <a
            className={"about-info"} href="https://nodejs.org/en"> nodeJs </a> and <a
            href="https://ru.wikipedia.org/wiki/C%2B%2B" className={"about-info"}> C++</a>. Currently I favor headless
            cms systems such as
            <a className={"about-info"} href="https://www.sanity.io/"> sanity</a>, 
            <a href="https://clerk.com/" className={"about-info"}> clerk</a>, 
            <a href="https://medusajs.com/" className={"about-info"}> medusa</a>. I also utilize databases such as
            <a href="https://www.prisma.io/" className={"about-info"}> prisma</a>,
            <a href="https://en.wikipedia.org/wiki/SQL" className={"about-info"}> sql </a> and <a href="https://www.mongodb.com/" className={"about-info"}> mongo </a> for my
            backend needs. These are fantastic choices for managing my content and data in a flexible and
            scalable way.
            <br/>

            Click view an alternate<a href="https://samm-waturu.github.io/GIT-pages/" target="_blank" className={"about-info"}>  [ experimental ] </a> portfolio using <a className={"about-info"} href="https://nextjs.org/"> Vite </a>.

          </p>

          <div className="author-box">
            <Image src={me} alt={"Am samm"} width={100} height={100} />
          </div>

        </div>

      </div>
    </>
  );
};