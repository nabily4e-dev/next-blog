import Head from "next/head";
import NavBar from "../components/NavBar";

function AboutPage() {
  return (
    <>
      <Head>
        <title>My Blog | About</title>
        <meta name="description" content="This is my Blog home page" />
      </Head>
      <header>
        <NavBar />
      </header>
      <div>
        <h1>About Page</h1>
      </div>
    </>
  );
}

export default AboutPage;
