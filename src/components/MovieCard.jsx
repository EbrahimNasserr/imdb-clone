import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ data }) {
  return (
    <>
      {data?.map((movie, index) => (
        <Link
          href={`/movie/${movie._id}`}
          key={index}
          className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md shadow-slate-200"
        >
          <Image
            width={500}
            height={250}
            src={`https://image.tmdb.org/t/p/original/${
              movie.poster_path || movie.backdrop_path
            }`}
            loading="lazy"
            alt="poster"
            className=" rounded-t-lg hover:opacity-75 transition-opacity duration-300:"
          />
          <div className="p-6">
            <h2 className="mb-2 text-xl font-semibold leading-snug truncate text-blue-gray-900 antialiased">
              {movie.original_title}
            </h2>
            <p className=" line-clamp-2 font-light">{movie.overview}</p>
          </div>
          <div className="p-6 pt-0 flex flex-row justify-between items-center">
            <p className="text-xs font-bold uppercase shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              {movie.release_date}
            </p>
            <p>{movie.vote_average}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
