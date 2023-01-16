import { useState } from "react";

import { Header } from "./components/Header";
import { Movie } from "./components/Movie";
import { Finder } from "./components/Finder";

export type MovieType = {
  title: string;
  overview?: string;
  poster_path?: string;
};

function App() {
  const [movie, setMovie] = useState<MovieType>({ title: "" });
  const [error, setError] = useState(false);

  return (
    <>
      <Header />
      <Movie movie={movie} error={error} />
      <Finder setMovie={setMovie} setError={setError} />
    </>
  );
}

export default App;
