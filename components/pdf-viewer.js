import React from "react";
import { useEffect, useState, useCallback, useRef } from "react";

import { Document, Page as ReactPdfPage, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

import workerSrc from "../pdf-worker";
import ControlPanel from "./ControlPanel";
import Loader from "./Loader";
import { FaBackward, FaForward } from "react-icons/fa";

// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer(props) {
  const bookRef = useRef(null);

  const [scale, setScale] = useState(1.2);
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const id = localStorage.getItem("bookId");
  useEffect(() => {
    if (id) {
      setFile(`${id}.pdf`);
    } else {
      setFile(null);
    }
  }, [localStorage.bookId]);

  function onFileChange(event) {
    id ? setFile(`${id}.pdf`) : setFile("./1.pdf");
    console.log(file);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setIsLoading(false);
  }

  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);

  const Page = React.forwardRef(({ pageNum }, ref) => {
    return (
      <div ref={ref}>
        <ReactPdfPage pageNum={pageNum} width={300} />
      </div>
    );
  });

  console.log(props, file, numPages);
  return (
    <div className="">
      <div>
        <Loader isLoading={isLoading} />
        <section
          id="pdf-section"
          className="d-flex flex-column align-items-center w-100"
        >
          <ControlPanel
            scale={scale}
            setScale={setScale}
            numPages={numPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            file={file}
          />

          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <HTMLFlipBook width={300} height={500} onFlip={onFlip}>
              {Array(numPages).map((x, pageNumber) => {
                return (
                  <Page
                    pageNumber={pageNumber + 1}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                );
              })}
            </HTMLFlipBook>
          </Document>
          <button
            className="absolute top-0 left-20 w-1/3 h-screen flex justify-start items-center"
            onClick={() => {
              bookRef.current.pageFlip().flipNext();
              if (!(pageNumber === 1)) setPageNumber(pageNumber - 1);
            }}
          >
            <FaBackward />
          </button>
          <button
            className="absolute top-0 right-20 w-1/3 h-screen flex justify-end items-center"
            onClick={() => {
              if (!(pageNumber === numPages)) setPageNumber(pageNumber + 1);
            }}
          >
            <FaForward />
          </button>
        </section>
      </div>
      <div className="flex justify-center">
        <span>
          Page {pageNumber} of {numPages}
        </span>
      </div>
    </div>
  );
}
