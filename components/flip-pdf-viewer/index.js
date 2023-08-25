"use client";
import Script from "next/script";
import { useEffect } from "react";

import PDFViewer from "./pdf-viewer";

const FlipPDFViewer = () => {
  useEffect(() => {
    console.log({ window: true });
  }, []);
  return (
    <div id="pdf-container">
      <PDFViewer />
    </div>
  );
};

export default FlipPDFViewer;
