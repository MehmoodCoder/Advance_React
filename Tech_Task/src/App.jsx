import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTasksAsync } from "./features/asyncTaskSlice";
import AddTaskForm from "./components/AddTaskForm";
import SearchFilterBar from "./components/SearchFilterBar";
import Dashboard from "./components/Dashboard";

function App() {
  const [editTask, setEditTask] = useState(null);
  const formRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasksAsync());
  }, [dispatch]);

  const handleStartEdit = (task) => {
    setEditTask(task);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-100 px-4 sm:px-6 lg:px-10 py-6 sm:py-10 selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        <header className="border-b border-[#30363d]/60 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              DevCore Workspace
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Track your programming goals and modules
            </p>
          </div>
          <div
            className={`text-xs font-mono border px-3 py-1.5 rounded-lg transition-all duration-300 flex items-center gap-2 ${
              editTask
                ? "bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-lg shadow-amber-500/5"
                : "bg-[#161b22] border-[#30363d] text-slate-400"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                editTask ? "bg-amber-400 animate-pulse" : "bg-emerald-400"
              }`}
            ></span>
            {editTask ? "Editing Mode" : "Active Session"}
          </div>
        </header>

        <section ref={formRef} className="w-full scroll-mt-6">
          <AddTaskForm editTask={editTask} setEditTask={setEditTask} />
        </section>

        <section className="w-full">
          <SearchFilterBar />
        </section>

        <section className="w-full pt-2">
          <Dashboard onEditClick={handleStartEdit} />
        </section>
      </div>
    </div>
  );
}

export default App;