import React from "react";
import PDFPrinter from "./PDFPrinter";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";

const ControlPanel = (props) => {
  const { scale, setScale } = props;

  const isMinZoom = scale < 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? "disabled" : "clickable";
  const zoomInClass = isMaxZoom ? "disabled" : "clickable";

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  return (
    <div className="flex align-middle justify-center mt-20 mb-5">
      <div className="d-flex justify-content-between align-items-baseline">
        <button
          className={`fas fa-search-minus mx-3 ${zoomOutClass}`}
          onClick={zoomOut}
        >
          <FaSearchMinus />
        </button>
        <span>{(scale * 100).toFixed()}%</span>
        <button
          className={`fas fa-search-plus mx-3 ${zoomInClass}`}
          onClick={zoomIn}
        >
          <FaSearchPlus />
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
