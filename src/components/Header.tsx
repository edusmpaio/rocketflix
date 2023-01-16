import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="max-w-xl mx-auto pt-20 pb-14 px-6 md:px-0 flex flex-col items-center gap-4">
      <img src={Logo} alt="Logo" className="w-24 mb-3" />
      <h1 className="text-4xl text-slate-50 text-center font-bold">
        Não sabe o que assistir?
      </h1>
    </header>
  );
}
