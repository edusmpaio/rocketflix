import { apiKey, baseUrl } from "../api/api";

import { MovieType } from "../App";

import Logo from "../assets/logo.svg";

type FinderProps = {
  setMovie: (movie: MovieType) => void;
  setError: (err: boolean) => void;
};

export function Finder({ setMovie, setError }: FinderProps) {
  async function findMovie() {
    const randomID = Math.floor(Math.random() * 1000);
    const apiUrl = `${baseUrl}${randomID}?${apiKey}&language=pt-BR`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.status === 404) {
      setError(true);
      return;
    }

    setError(false);

    setMovie(data);
  }

  return (
    <div className="max-w-sm mx-auto px-6 md:px-0 flex flex-col items-center">
      <button
        onClick={findMovie}
        className="bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-bold flex items-center gap-4 py-3 px-6 mb-6 rounded"
      >
        <img src={Logo} alt="Logo" className="w-9" />
        Encontrar filme
      </button>
      <p className="text-slate-50 font-normal text-sm text-center leading-5 mb-14">
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </div>
  );
}
