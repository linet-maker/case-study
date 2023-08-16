import { Radley } from "next/font/google";
import Link from "next/link";
import getDaySuffix from "@/util";

const radFont = Radley({
  subsets: ["latin"], weight: ["400"],
  style: ["normal", "italic"]
});


export function Posts({ post, pathPrefix }) {

  let date = new Date(post.publishedAt).getDate();
  let suffixDate = getDaySuffix(date);
  let option = { month: "long" };
  let month = (new Date(post.publishedAt).toLocaleString("en-us", option));
  let monthShort = month.slice(0, 3);
  let year = new Date(post.publishedAt).getFullYear();
  let autoDate = `${suffixDate}/${monthShort}/${year}`;
  // Passing props to this component from my home page
  return (
    <>
      <div className={radFont.className}>
        <div className="col-xs-12 col-sm-12 col-lg-12 post-line">
            <span className="post-titles">
                <Link href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                  post.slug.current
                }`}>
                    <h1 style={{ fontWeight: "400", fontStyle: "normal" }}>
                        {/*{title}*/}
                      {post.title}
                    </h1>
                </Link>
                <p className={"onHover"}>
                        {/*{description}*/}
                  {post.excerpt}
                </p>
            </span>
          <div>
                    <span className={"dates"}>
                        <br />
                      {/*{created_at}*/}
                      {post &&
                        autoDate
                      }
                    </span>
          </div>
        </div>
      </div>
    </>
  );
}