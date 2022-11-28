import "src/styles/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { memo } from "react";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>nexst</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default memo(App);
