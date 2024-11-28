import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex w-full h-20 bg-blue-800 justify-between items-center px-4 md:px-10">
      {/* Logo Section */}
      <div className="flex items-center h-14 space-x-4">
        <Image src="/newlogo.png" alt="logo" height={50} width={50} />
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-sans">
          Next Tour
        </h3>
      </div>

      {/* Menu Items */}
      <div>
        <ul className="flex flex-wrap space-x-3 md:space-x-6 text-white text-sm md:text-base">
          <li className="hover:underline cursor-pointer">
            <Link href="/Home">Home</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/photography">Photography</Link>
          </li>
          <li className="hover:underline cursor-pointer">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;