import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app/globals.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SimilarMovies({ similarMovies }) {
  console.log(similarMovies);
  return (
    <div className=" flex justify-between items-center flex-col">
      <h2 className=" flex flex-row justify-center w-full mb-5 bg-blue-500 bg-opacity-55 py-10 sm:text-lg md:text-xl lg:text-2xl">
        similar Movies
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {similarMovies.slice(0, 7).map((movie, i) => (
          <SwiperSlide key={i}>
            <Link
              href={`/movie/${movie._id}`}
              key={i}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
