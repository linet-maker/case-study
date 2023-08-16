import { PortableText } from "@/sanity/lib/plugins/portabletext";
import { Radley } from "next/font/google";

const radFont = Radley({
  subsets: ["latin"], weight: ["400"],
  style: ["normal", "italic"]
});
import { Montserrat } from "next/font/google";

const montFont = Montserrat({ style: ["normal", "italic"], subsets: ["latin"], weight: ["400", "600", "800"] });

export function Post({ post }) {
  return (
    <div className={radFont.className}>
      <section className={"post-list post-content"}
               style={{ overflow: "auto", paddingTop: "150px", paddingBottom: "200px" }}>
        <div className="post-data">
          <div className={montFont.className}>
            <h1 className="post-page-title" style={{ fontWeight: "600" }}>{post.title}</h1>
          </div>
          <p className="post-meta-data" style={{ fontStyle: "italic" }}> {post.estReadingTime || "8"} min read </p>

          <hr />

          {/*Fetching the body section*/}

          {
            post.body && (<PortableText value={post.body} />)
          }
        </div>
      </section>
    </div>
  );
}
