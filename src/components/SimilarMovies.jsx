import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function SimilarMovies({ similarMovies }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div>
      <h2 className=" flex flex-row justify-center w-full mb-5 bg-blue-500 bg-opacity-55 py-10 sm:text-lg md:text-xl lg:text-2xl">
        similar Movies
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {similarMovies?.map((movie) => {
            return (
              <Link
                href={`/movie/${movie._id}`}
                key={movie._id}
                className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md shadow-slate-200"
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
                    {movie.title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
