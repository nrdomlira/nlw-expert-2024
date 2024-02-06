import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";


export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");

  function handleShouldShowOnboarding() {
    setShouldShowOnboarding(!shouldShowOnboarding);
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
    if (event.target.value === "") {
      setShouldShowOnboarding(!shouldShowOnboarding);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const date = new Date();
    localStorage.setItem(date.toISOString(), content);

    setShouldShowOnboarding(!shouldShowOnboarding)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-sm bg-slate-800 p-5 flex flex-col gap-3 overflow-hidden relative text-left outline-none hover:ring-2 hover:ring-slate-400 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium leading-6 text-slate-300">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col">
          <Dialog.Close>
            <X className="absolute right-0 top-0 px-1.5 bg-black/50" />
          </Dialog.Close>
          <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium leading-6 text-slate-300">
                Adicionar nota
              </span>
              {shouldShowOnboarding ? (
                <p className="text-sm leading-6 text-slate-400">
                  Comece gravando uma{" "}
                  <button className="text-lime-400 hover:underline">
                    nota em áudio
                  </button>{" "}
                  ou se preferir{" "}
                  <button
                    onClick={handleShouldShowOnboarding}
                    className="text-lime-400 hover:underline"
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  onChange={handleContentChange}
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none focus:outline-none"
                ></textarea>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
