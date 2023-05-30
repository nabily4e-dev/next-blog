import Head from "next/head";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log("[App] render");
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" content="This is my Blog home page" />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
