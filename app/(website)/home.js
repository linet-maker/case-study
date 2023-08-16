import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Default } from "@/components/Default";
import { Posts } from "@/components/Posts";

export default function Home({ posts }) {

  return (
    <>
      <Header />

      <section className="post-list row">

        {/*Just a line or divider*/}

        {/*Default singlePost*/}

        <div style={{ overflow: "auto", paddingTop: "100px", paddingBottom: "80px" }}>

          <Default />

          {/* ui scroll down */}

          <div className="pagination-wrapper">
            <nav className="pagination" role="pagination">
              <span className=" arrow glyphicon glyphicon-menu-down"></span>
            </nav>
          </div>

          {/*Dynamic posts*/}

          {/*{ posts === [] ? console.log('no posts'): console.log(posts)}*/}

          {posts && posts.map(post => (
            <Posts key={post._id} post={post} />))
          }
        </div>
      </section>

      <Footer fixedState={`non`} blur={"non"} smallText={`note.`} />

      {/*

            ** modified footer **

            <Footer fixedState={`navbar-fixed-bottom`} blur={'blur'} smallText={`note.`}/>

            */}
    </>
  );
}
