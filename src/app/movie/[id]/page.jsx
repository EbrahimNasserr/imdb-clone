"use client";
import { useGetMovieByIdQuery } from "@/services/moviesApi";
import Image from "next/image";
import Loader from "../../loading";
import SimilarMovies from "@/components/SimilarMovies";

const MoviePage = ({ params }) => {
  const movieId = params.id;
  const { data, error, isLoading } = useGetMovieByIdQuery(movieId);
  const similarMovies = data?.similarMovies;

  if (isLoading) return <Loader />;
  if (error) return <div className=" h-screen flex justify-center items-center text-3xl">Error: there is no details</div>;

  return (
    <>
      <section>
        <div className="w-full p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
          <div className=" flex items-center justify-center">
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                data?.movie.poster_path || data?.movie.backdrop_path
              }`}
              alt={data?.movie.original_title}
              width={500}
              height={300}
              className=" rounded-lg "
            />
          </div>
          <div className="p-2">
            <h2 className=" text-lg mb-3 font-bold">
              {data?.movie.original_title}
            </h2>
            <p className=" text-lg mb-3 font-light">{data?.movie.overview}</p>
            <div className=" flex flex-row gap-3 mb-3">
              <span className=" font-semibold">release date:</span>
              <p>{data?.movie.release_date}</p>
            </div>
            <div className=" flex flex-row gap-3">
              <span className=" font-semibold">genres:</span>
              <div className="flex flex-row mb-3 gap-3">
                {data?.movie.genres?.slice(0, 3).map((genre, i) => (
                  <p key={i} className=" text-sm sm:text-base">
                    {genre}
                  </p>
                ))}
              </div>
            </div>
            <div className=" flex flex-row gap-3 mb-3">
              <span className=" font-semibold">vote:</span>
              <p>{data?.movie.vote_average}</p>
            </div>
          </div>
        </div>
      </section>
      <section className=" pt-24">
        <SimilarMovies similarMovies={similarMovies} />
      </section>
    </>
  );
};

export default MoviePage;
