/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
const Header = () => {
  return (
    <div className=" border-gray-400 flex justify-between w-full shadow-lg top-0 sticky bg-[#111827]">
      <div className="m-5">
        <a href="#home">
          <h1 className="font-bold cursor-pointer hidden md:inline-grid">
            Khushaal Choithramani
          </h1>
        </a>
        <Link href="#home">
          <h1 className="font-bold cursor-pointer md:hidden">Khushaal</h1>
        </Link>
      </div>
      <div className="m-5 cursor-pointer font-semibold">
        <a href="#home">
          <span className="linkSpan">Home</span>
        </a>
        <a href="#about">
          <span className="linkSpan">About</span>
        </a>
        <a href="#projects">
          <span className="linkSpan">Projects</span>
        </a>
        <a href="#contact">
          <span className="linkSpan">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
