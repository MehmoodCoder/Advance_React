import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTaskAsync, editTaskAsync } from "../features/asyncTaskSlice";

const AddTaskForm = ({ editTask, setEditTask }) => {
  const dispatch = useDispatch();

  const techStacks = [
    { id: "select", value: "", label: "Select Language / Tech" },
    { id: "lang-c", value: "c", label: "C Language" },
    { id: "lang-cpp", value: "c++", label: "C++" },
    { id: "lang-python", value: "python", label: "Python" },
    { id: "lang-js", value: "javascript", label: "JavaScript" },
    { id: "lang-ts", value: "typescript", label: "TypeScript" },
    { id: "lang-java", value: "java", label: "Java" },
    { id: "lang-ruby", value: "ruby", label: "Ruby" },
    { id: "lang-rust", value: "rust", label: "Rust" },
    { id: "lang-html", value: "html", label: "HTML5" },
    { id: "lang-css", value: "css", label: "CSS3" },
    { id: "fw-react", value: "react", label: "React.js" },
    { id: "fw-next", value: "next", label: "Next.js" },
    { id: "fw-redux", value: "redux", label: "Redux Toolkit" },
    { id: "fw-django", value: "django", label: "Django" },
    { id: "fw-node", value: "node", label: "Node.js" },
    { id: "fw-express", value: "express", label: "Express.js" },
    { id: "fw-tailwind", value: "tailwind", label: "Tailwind CSS" },
    { id: "tool-figma", value: "figma", label: "Figma UI/UX" },
    { id: "vc-git", value: "git", label: "Git" },
    { id: "vc-github", value: "github", label: "GitHub" },
  ];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const titleInputRef = useRef(null);

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title || "");
      setDescription(editTask.description || "");
      setTag(editTask.tag || "");
      if (titleInputRef.current) {
        titleInputRef.current.focus();
      }
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !tag) return;

    if (editTask) {
      dispatch(editTaskAsync({ id: editTask.id, title, description, tag }));
      setEditTask(null);
    } else {
      dispatch(addTaskAsync({ title, description, tag }));
    }

    setTitle("");
    setDescription("");
    setTag("");
  };

  const handleCancel = () => {
    setEditTask(null);
    setTitle("");
    setDescription("");
    setTag("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-[#161b22]/60 backdrop-blur-md border ${
        editTask
          ? "border-amber-500/80 shadow-lg shadow-amber-500/10"
          : "border-[#30363d]"
      } rounded-2xl p-4 sm:p-6 transition-all duration-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-end`}
    >
      <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          {editTask ? "Edit Title" : "Task Title"}
        </label>
        <input
          ref={titleInputRef}
          type="text"
          className="w-full bg-[#0d1117] border border-[#30363d] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600"
          placeholder="e.g., Build API Endpoint"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Description
        </label>
        <input
          type="text"
          className="w-full bg-[#0d1117] border border-[#30363d] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-600"
          placeholder="What needs to be done?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Tech Tag
        </label>
        <select
          className="w-full bg-[#0d1117] border border-[#30363d] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 outline-none transition-all cursor-pointer"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          required
        >
          {techStacks.map((stack) => (
            <option key={stack.id} value={stack.value} className="bg-[#0d1117]">
              {stack.label}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-1 lg:col-span-2 flex gap-2">
        <button
          type="submit"
          className={`w-full h-[42px] ${
            editTask
              ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 shadow-amber-500/20"
              : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-95 shadow-indigo-500/20"
          } text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center`}
        >
          {editTask ? "Save" : "Push Task"}
        </button>
        {editTask && (
          <button
            type="button"
            onClick={handleCancel}
            className="h-[42px] px-4 bg-[#21262d] border border-[#30363d] text-slate-300 hover:text-white font-medium text-xs rounded-xl hover:bg-[#30363d] transition-all cursor-pointer active:scale-[0.98]"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default AddTaskForm;