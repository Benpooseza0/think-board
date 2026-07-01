import { NotebookIcon, PenSquareIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NoteNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-16 max-w-md mx-auto text-center">
      <div className="bg-yellow-500/10 rounded-full p-8">
        <NotebookIcon className="w-8 h-8 text-[#d68a00]" />
      </div>
      <h3 className="text-2xl font-bold">No Notes yet</h3>
      <p className="text-slate-600">
        Ready to organize your thoughts? Create your first note to get started
        on your journey.
      </p>
      <Link
        to="/create"
        className="inline-flex items-center gap-2 px-3 py-2 bg-[#d68a00] text-white rounded-md hover:bg-[#b87400]"
      >
        <PenSquareIcon className="w-4 h-4" />
        Create Your First Note
      </Link>
    </div>
  );
};

export default NoteNotFound;
