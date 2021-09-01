import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next-Portfolio</title>
      </Head>

      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App