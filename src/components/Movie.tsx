import { imageUrl } from "../api/api";

import { MovieType } from "../App";

import errorPoster from "../assets/error-poster.svg";

type MovieProps = {
  movie: MovieType;
  error: boolean;
};

export function Movie({ movie, error }: MovieProps) {
  return (
    <>
      {(movie.title !== "" || error) && (
        <section className="max-w-2xl mx-auto px-6 md:px-0 gap-9 mb-14 flex flex-col md:flex-row items-center text-center md:text-left">
          <img
            src={
              error || !movie.poster_path
                ? errorPoster
                : imageUrl + movie.poster_path
            }
            alt="Poster do filme"
            className="w-44 h-60"
          />
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-slate-50 text-xl font-bold mb-5 max-w-sm">
              {error || !movie.poster_path
                ? "Ops, hoje não é dia de assistir filme. Bora codar! 🚀"
                : movie.title}
            </h2>
            <p className="text-slate-50">{error ? "" : movie.overview}</p>
          </div>
        </section>
      )}
    </>
  );
}
