import Link from "next/link";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <header className=" flex justify-between items-center p-3 px-6 max-w-6xl mx-auto">
      <nav className=" flex gap-4">
        <MenuItems title="home" address="/" Icon={AiFillHome} />
        <MenuItems title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </nav>
      <div className=" flex items-center gap-4">
        <DarkModeSwitch />
        <Link href={"/"} className=" flex items-center gap-1">
          <span className="text-2xl uppercase font-bold bg-blue-500 py-1 px-2 rounded-lg">
            imdb
          </span>
          <span className="text-xl hidden sm:inline">clone</span>
        </Link>
      </div>
    </header>
  );
}
