import "@/styles/globals.css";
import Script from "next/script";
import Head from "next/head";

import Layout from "../components/Layout";
import "../public/css/font-awesome.min.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (window) {
      console.log({ window });
      // flipbook(window);
    }
  }, [this?.window]);
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/html2canvas.min.js" strategy="beforeInteractive" />
      <Script src="/js/three.min.js" strategy="beforeInteractive" />
      <Script src="/js/pdf.min.js" strategy="beforeInteractive" />
      <Script src="/js/3dflipbook.min.js" strategy="beforeInteractive" />

      <Component {...pageProps} />
    </Layout>
  );
}
