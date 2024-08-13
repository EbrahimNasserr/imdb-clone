import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { useGetMoviesQuery } from "@/services/moviesApi";
import Loader from "@/app/loading";

export default function MoviesSection({ category, setCategory }) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  const { data, error, isLoading } = useGetMoviesQuery();

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  const moviesArray = data;
  let filteredData;
  if (category === "trending") {
    filteredData = moviesArray.filter((movie) =>
      movie.release_date.includes("2023")
    );
  } else {
    filteredData = moviesArray;
  }

  return (
    <section
      ref={container}
      className="relative flex-col gap-2 flex items-center justify-between"
      style={{ y }}
    >
      <div className=" w-full">
        <Navbar onCategoryChange={setCategory} />
      </div>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-4 2xl:grid-cols-5 mx-auto ">
        <MovieCard data={filteredData} />
      </div>
    </section>
  );
}
