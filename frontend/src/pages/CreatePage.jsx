import React, { useState } from "react";
import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../libs/axios"

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All Fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note Created Successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error Creating", error);
      if (error.response.status === 429) {
        toast.error("Slow down! you're creating notes too fast", {
          duration: 400,
          icon: "💀"
        })
        
      } else {
        toast.error("Failed to create note")
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#d68a00_100%)] flex items-center justify-center">
      <div className="w-full max-w-2xl px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-6 text-[#d68a00] hover:text-[#b87400] font-medium"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Notes
        </Link>

        <div className="card bg-slate-50 shadow-lg border-t-4 border-[#d68a00] rounded-lg p-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6 text-[#d68a00] font-semibold">
              Create New Note
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-slate-700">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note Title"
                  className="input input-bordered bg-white p-3 w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-control mb-8">
                <label className="label">
                  <span className="label-text text-slate-700">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32 bg-white p-3 w-full"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className="card-actions justify-end">
                <button
                  type="submit"
                  className="btn bg-[#d68a00] text-white hover:bg-[#b87400] px-6 py-2 rounded-md"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
