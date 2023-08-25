"use client";
import { useEffect } from "react";
import Script from "next/script";
import PDFRenderrer from "./pdf-renderrer";
// import * as THREE from 'three'

const PDFViewer = () => {
  return (
    <div>
      <Script src="/js/3dflipbook.min.js" />
      <br />
      <br />
      <br />
      <br />
      <PDFRenderrer />
    </div>
  );
};

export default PDFViewer;