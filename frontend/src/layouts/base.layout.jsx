import { Fragment } from "react";
import Head from "next/head";

// Core
import AppBar from "./app_bar";
import Main from "./main";

function BaseLayout(props) {
  const { children } = props;

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <AppBar />

      <Main>
        {children}
      </Main>
    </Fragment>
  );
}

export default BaseLayout;
