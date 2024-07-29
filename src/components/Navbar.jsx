import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Navbar({ onCategoryChange }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("category");

  return (
    <nav className=" flex flex-row gap-4 md:gap-6 lg:gap-10 justify-center bg-blue-500 bg-opacity-55 py-10">
      <Link
        href="/?category=trending"
        passHref
        className={` hover:text-amber-500 transition-all ${
          genre === "trending"
            ? " underline underline-offset-[10px] decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        scroll={false}
        onClick={() => onCategoryChange("trending")}
      >
        Trending
      </Link>
      <Link
        href="/?category=allMovies"
        passHref
        className={` hover:text-amber-500 transition-all ${
          genre === "allMovies"
            ? " underline underline-offset-[10px] decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        scroll={false}
        onClick={() => onCategoryChange("allMovies")}
      >
        All
      </Link>
    </nav>
  );
}
