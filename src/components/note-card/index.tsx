import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";

type NoteCardProps = {
  data: {
    date: string;
    content: string | null;
  };
};

export default function NoteCard({ data }: NoteCardProps) {
  const [note, setNote] = useState<string[]>([]);
  //const [len, setLen] = useState(0)

  function handleDeleteNote() {
    localStorage.removeItem(data.date);
    //console.log(note)
    /* setLen(Object.keys(localStorage).length);
    console.log(note.length) */
  }

  useEffect(() => {
    setNote(Object.keys(localStorage));
    console.log(note.length)
    //setLen(note.length)
    //console.log(len)
  }, []);

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-sm bg-slate-800 p-5 flex flex-col gap-3 overflow-hidden relative text-left outline-none hover:ring-2 hover:ring-slate-400 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium leading-6 text-slate-300">
          {formatDistanceToNow(data.date, { locale: ptBR, addSuffix: true })}
        </span>
        <p className="text-sm leading-6 text-slate-400">{data.content}</p>

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col">
          <Dialog.Close>
            <X className="absolute right-0 top-0 px-1.5 bg-black/50" />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium leading-6 text-slate-300">
              {formatDistanceToNow(data.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
            <p className="text-sm leading-6 text-slate-400">{data.content}</p>
          </div>

          <Dialog.Close>
            <div
              onClick={handleDeleteNote}
              className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group"
            >
              <span className="text-red-400 group-hover: underline">
                Apagar nota
              </span>
              ?
            </div>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
