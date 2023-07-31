import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false,
});

export default function PDF() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/categories");
  };

  return (
    <div className="flex justify-center ">
      <div className="w-1/2 text-center mt-20 ">
        <h2 className="text-4xl font-bold mb-4">
          Indulge in unlimited reading like how milllions already have
        </h2>
        <ul className="font-bold">
          <li>➔ Read 800+ magazines and books</li>
          <li>➔ Access to curated premium stuff</li>
        </ul>
        <button
          className="mt-4 bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
