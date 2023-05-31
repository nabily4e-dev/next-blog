import Head from "next/head";
import { getPost, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
  console.log("[FirstPost Page] getStaticPaths()");
  const slugs = await getSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log("[FirstPost Page] getStaticProps()", slug);
  const post = await getPost(slug);
  return {
    props: { post },
  };
}

function PostPage({ post }) {
  console.log("[Post Page] render", post);
  return (
    <>
      <Head>
        <title>My Blog | {post.title}</title>
        <meta name="description" content="This is my Blog home page" />
      </Head>
      <main>
        <p>{post.date}</p>
        <h1>{post.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  );
}

export default PostPage;
