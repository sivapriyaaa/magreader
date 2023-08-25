import { useState, useEffect } from "react";

const PDFRenderrer = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    console.log({ window, condition: window && window.$, s: true });
    if (window && window.$ && !!file) {
      window.$("#pdf-container").FlipBook({
        pdf: file,
        template: {
          html: "templates/default-book-view.html",
          styles: ["css/short-black-book-view.css"],
          links: [
            {
              rel: "stylesheet",
              href: "css/font-awesome.min.css",
            },
          ],
          script: "js/default-book-view.js",
        },
      });

      window.$("#pdf-container").css("margin-top", "100px");
      window.$("#pdf-container").css("height", "70vh");
    }
  }, [this?.window, file]);

  useEffect(() => {
    const id = localStorage.getItem("bookId");
    if (id) {
      setFile(`${id}.pdf`);
    } else {
      setFile(null);
    }
  }, []);
  console.log(this?.window);
  return (
    <div
      id="pdf-container"
      style={{ marginTop: "100px !important", height: "70vh !important" }}
    ></div>
  );
};
export default PDFRenderrer;
