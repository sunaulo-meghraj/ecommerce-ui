import { Fragment } from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
