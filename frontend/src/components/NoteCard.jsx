import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../libs/utils";
import api from "../libs/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note,setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter(note => note._id !== id)) //เลือกไอดีที่ลบ
      toast.success("Note Deleted successfully");
    } catch (error) {
      console.error("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-slate-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-solid border-yellow-600 py-8 px-6"
    >
      <div className="card-body">
        <h3 className="card-title text-slate-content">{note.title}</h3>
        <p className="text-slate-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions flex justify-between items-center mt-4">
          <span className="text-sm text-slate-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="w-4 h-4" />
            <button
              type="button"
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="w-4 h-4 text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
