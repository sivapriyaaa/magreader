import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import PDFViewerWithFlip from "../../components/flip-pdf-viewer";

const PDFViewer = dynamic(() => import("../../components/pdf-viewer"), {
  ssr: false,
});

export default function PDF() {
  const router = useRouter();
  const id = router.query.slug;
  return <PDFViewerWithFlip />;
}
