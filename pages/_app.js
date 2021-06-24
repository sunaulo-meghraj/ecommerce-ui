import { Fragment } from "react";
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
