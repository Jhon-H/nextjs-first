import React, { useEffect } from 'react';
import Head from 'next/head';
import '../styles//404.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
