import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex flex-col sm:flex-row gap-2 shadow-inner p-1 bg-[#0d1117]/80 rounded-xl border border-[#30363d]/40 focus-within:border-indigo-500/50 focus-within:ring-2 focus-within:ring-indigo-500/10 transition-all duration-200">
      <input
        type="text"
        className="w-full bg-transparent text-slate-100 px-4 py-3 outline-none text-sm placeholder:text-slate-600"
        placeholder="Add a new task assignment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-2.5 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold text-sm rounded-lg transition-all active:scale-95 shrink-0"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTodo;