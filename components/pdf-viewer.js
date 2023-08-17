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

const Page = React.forwardRef(({ pageNum, scale, key }, ref) => {
  console.log({ fromWithinPage: pageNum });
  return (
    <div ref={ref} key={key}>
      <ReactPdfPage
        pageNumber={pageNum}
        width={500}
        scale={scale}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        loading="Loading the Page..."
      />
    </div>
  );
});

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

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    setIsLoading(false);
  }

  const onFlip = useCallback((e) => {
    console.log({
      e,
      obj: e.object.pages.currentPageIndex,
      pageNumber,
      numPages,
    });
    const currentPage = e.object.pages.currentPageIndex;
    setPageNumber(currentPage);
  }, []);

  return (
    <div className="">
      <div>
        <Loader isLoading={isLoading} />
        <section
          id="pdf-section"
          className="d-flex flex-column align-items-center w-100 pl-32"
        >
          <ControlPanel
            scale={scale}
            setScale={setScale}
            numPages={numPages}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            file={file}
          />

          <Document
            file={file}
            loading={
              <div>
                <h1>Loading PDF DOcument...</h1>
              </div>
            }
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <HTMLFlipBook
              width={600}
              height={1000}
              onFlip={onFlip}
              ref={bookRef}
            >
              {Array(numPages)
                .fill(0)
                .map((x, pageNum) => {
                  return (
                    <Page key={pageNum} pageNum={pageNum + 1} scale={scale} />
                  );
                })}
            </HTMLFlipBook>
          </Document>
          <button
            className="absolute top-0 left-20 w-1/3 h-screen flex justify-start items-center"
            onClick={() => {
              bookRef.current.pageFlip().flipPrev();
            }}
          >
            <FaBackward />
          </button>
          <button
            className="absolute top-0 right-20 w-1/3 h-screen flex justify-end items-center"
            onClick={() => {
              bookRef.current.pageFlip().flipNext();
            }}
          >
            <FaForward />
          </button>
        </section>
      </div>
      <div className="flex justify-center">
        <span>
          Page {pageNumber + 1} - {pageNumber + 2} of {numPages}
        </span>
      </div>
    </div>
  );
}
