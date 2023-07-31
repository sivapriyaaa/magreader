import Link from "next/link";
import papers from "@/utils/utils";

const Categories = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center mt-16">
      {" "}
      {papers.map((book) => (
        <Link
          href={`/pageview`}
          onClick={() => localStorage.setItem("bookId", book.id)}
        >
          <div className="w-80 h-100 max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img
              alt={book.name}
              className="ml-16 mt-2 w-40 h-60 object-cover mr-4"
            />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{book.name}</div>
              <p className="text-gray-700 text-base">{book.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Categories;
