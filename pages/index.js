import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/NavBar";

function HomePage() {
  console.log("[Home Page] render");
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="This is my Blog home page" />
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
}

export default HomePage;
