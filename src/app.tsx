import logo from "./assets/logo-nlw-expert.svg";
import NoteCard from "./components/note-card";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW expert logo" className="h-10 w-auto" />
      <form action="" className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas ..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <div className="rounded-sm bg-slate-700 p-5 space-y-3">
          <span className="text-sm font-medium leading-6 text-slate-300">
            Adicionar nota
          </span>
          <p className="text-sm leading-6 text-slate-400">
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>
       <NoteCard day={1} message="O Drizzle possui um plugin do ESLint para evitar que realizemos updates
        ou deletes sem where... Para configurar o plugin, é preciso instalar
        como abaixo:" />
       <NoteCard day={2} message="O Drizzle possui um plugin do ESLint para evitar que realizemos updates
        ou deletes sem where... Para configurar o plugin, é preciso instalar
        como abaixo:" />
       <NoteCard day={5} message="O Drizzle possui um plugin do ESLint para evitar que realizemos updates
        ou deletes sem where... Para configurar o plugin, é preciso instalar
        como abaixo:" />
       <NoteCard day={12} message="O Drizzle possui um plugin do ESLint para evitar que realizemos updates
        ou deletes sem where... Para configurar o plugin, é preciso instalar
        como abaixo:" />
      </div>
    </div>
  );
}