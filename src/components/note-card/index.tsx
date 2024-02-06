type NoteCardProps = {
  day: number;
  message: string;
};

export default function NoteCard({ day, message }: NoteCardProps) {
  return (
    <button className="rounded-sm bg-slate-800 p-5 space-y-3 relative text-left outline-none hover:ring-2 hover:ring-slate-400 focus-visible:ring-2 focus-visible:ring-lime-400 pointer-events-none">
      <span className="text-sm font-medium leading-6 text-slate-300">
        {day > 1 ? `há ${day} dias` : `há ${day} dia`}
      </span>
      <p className="text-sm leading-6 text-slate-400">{message}</p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 " />
    </button>
  );
}
