import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative w-full z-10">
      <nav className="fixed top-0 left-0 right-0  bg-gray-800 p-4 ">
        <div className="container mx-auto">
          <div className="flex items-center ">
            <div className="text-white font-semibold text-xl">
              <Link href="/">E-READER APP</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
