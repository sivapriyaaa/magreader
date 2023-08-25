"use client";
import Script from "next/script";
import { useEffect } from "react";
import { html } from "./js-flip-book/html.js";
import PDFViewer from "./pdf-viewer";

const PDFViewer = () => {
  useEffect(() => {
    console.log({ window });
  }, []);
  return (
    <div id="pdf-container">
      <Script src="/js/jquery.min.js" />
      <Script src="/js/html2canvas.min.js" />
      <Script src="/js/three.min.js" />
      <Script src="/js/pdf.min.js" />

      <Script src="https://aframe.io/releases/1.3.0/aframe.min.js" />
      {/* <Script src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar.js" /> */}
      <PDFViewer />
    </div>
  );
};

export default PDFViewer;
