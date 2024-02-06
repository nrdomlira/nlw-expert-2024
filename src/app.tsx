import { useEffect, useState } from "react";
import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import NoteCard from "./components/note-card";

export function App() {
  const [key, setKey] = useState<string[]>([]);
  const [len, setLen] = useState(0)

  useEffect(() => {
    setKey(Object.keys(localStorage));
    //console.log(Object.keys(localStorage).length)
    setLen(Object.keys(localStorage).length);
    console.log(len)
  }, [len]);

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
        <NewNoteCard />

        {key.map((keys) => (
          <NoteCard key={keys}
            data={{ date: keys, content: localStorage.getItem(keys) }}
          />
        ))}
      </div>
    </div>
  );
}
