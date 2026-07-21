import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTaskAsync } from "../features/asyncTaskSlice";

function Dashboard({ onEditClick }) {
  const dispatch = useDispatch();
  const { items: tasks, status, searchTerm, selectedTag, sortBy } = useSelector(
    (state) => state.asyncTasks
  );

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch =
        task.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag =
        selectedTag === "all" ? true : task.tag === selectedTag;
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      if (sortBy === "newest") return Number(b.id) - Number(a.id);
      if (sortBy === "oldest") return Number(a.id) - Number(b.id);
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  if (status === "loading" && tasks.length === 0) {
    return (
      <div className="text-center py-20 text-slate-400 font-mono animate-pulse">
        Fetching workspace tasks from storage...
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-between items-center pb-3 border-b border-[#30363d]/40">
        <h2 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-2.5">
          <span>Active Feed</span>
          <span className="bg-[#161b22] text-indigo-400 px-2.5 py-0.5 rounded-full text-[11px] font-mono border border-[#30363d]">
            {filteredTasks.length}
          </span>
        </h2>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-[#30363d] rounded-2xl text-slate-500 text-sm bg-[#161b22]/20 backdrop-blur-sm">
          <p className="font-semibold text-slate-300 text-base">
            Workspace Stream Empty
          </p>
          <p className="text-xs text-slate-500 mt-1">
            {tasks.length === 0
              ? "Add a task above to populate your workspace."
              : "No tasks matched your search or filter."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="group bg-[#161b22]/40 border border-[#30363d]/70 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/60 hover:bg-[#161b22]/80 transition-all duration-300 relative shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="font-bold text-slate-100 text-base tracking-tight break-words max-w-[70%] group-hover:text-indigo-300 transition-colors">
                    {task.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2.5 py-1 bg-indigo-950/60 text-indigo-300 border border-indigo-800/50 rounded-lg font-bold uppercase shrink-0 tracking-wider">
                    {task.tag || "Core"}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 line-clamp-4 break-words leading-relaxed mb-6 font-normal">
                  {task.description}
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#30363d]/40 mt-auto">
                <button
                  onClick={() => onEditClick(task)}
                  className="text-xs text-slate-300 hover:text-amber-400 font-medium px-3 py-1.5 rounded-lg bg-[#0d1117] border border-[#30363d] hover:border-amber-500/50 hover:bg-amber-500/10 transition-all active:scale-95 cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTaskAsync(task.id))}
                  className="text-xs text-slate-300 hover:text-rose-400 font-medium px-3 py-1.5 rounded-lg bg-[#0d1117] border border-[#30363d] hover:border-rose-500/50 hover:bg-rose-500/10 transition-all active:scale-95 cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;