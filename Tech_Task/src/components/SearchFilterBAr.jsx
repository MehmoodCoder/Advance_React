import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchTerm,
  setSelectedTag,
  setSortBy,
} from "../features/asyncTaskSlice";

function SearchFilterBar() {
  const dispatch = useDispatch();
  const { searchTerm, selectedTag, sortBy } = useSelector(
    (state) => state.asyncTasks
  );

  const techStacks = [
    { id: "all-tag", value: "all", label: "All Tech Tags" },
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

  return (
    <div className="bg-[#161b22]/40 border border-[#30363d]/70 rounded-2xl p-4 flex flex-col md:flex-row gap-3 items-center justify-between">
      <div className="w-full md:w-1/2">
        <input
          type="text"
          placeholder="🔍 Search tasks by title or description..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="w-full bg-[#0d1117] border border-[#30363d] focus:border-indigo-500 rounded-xl px-3.5 py-2 text-sm text-slate-100 outline-none transition-all"
        />
      </div>

      <div className="flex w-full md:w-auto gap-2">
        <select
          value={selectedTag}
          onChange={(e) => dispatch(setSelectedTag(e.target.value))}
          className="w-1/2 md:w-auto bg-[#0d1117] border border-[#30363d] focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none cursor-pointer"
        >
          {techStacks.map((stack) => (
            <option key={stack.id} value={stack.value}>
              {stack.label}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="w-1/2 md:w-auto bg-[#0d1117] border border-[#30363d] focus:border-indigo-500 rounded-xl px-3 py-2 text-xs text-slate-200 outline-none cursor-pointer"
        >
          <option value="newest">Sort: Newest</option>
          <option value="oldest">Sort: Oldest</option>
          <option value="title">Sort: Title (A-Z)</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilterBar;