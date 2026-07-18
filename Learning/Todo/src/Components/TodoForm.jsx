import React, { useState } from 'react';
import { useToDo } from '../Context/ToDo';

function TodoForm() {
    const [Todo, setTodo] = useState("");
    const { AddTodo } = useToDo();

    const add = (e) => {
      e.preventDefault();
      if (!Todo.trim()) return;

      AddTodo({ todo: Todo, Completed: false });
      setTodo("");
    };

  return (
      <form onSubmit={add} className="flex shadow-lg rounded-xl overflow-hidden border border-[#334155] focus-within:border-blue-500/60 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all duration-200">
          <input
              type="text"
              placeholder="What needs to be done?"
              className="w-full bg-[#0f172a]/60 text-slate-100 px-4 py-3 outline-none duration-150 text-sm placeholder:text-slate-500"
              value={Todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button 
              type="submit" 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm transition-all active:scale-95 shrink-0 flex items-center justify-center gap-1"
          >
              <span>Add</span>
              <span className="text-xs opacity-70">➕</span>
          </button>
      </form>
  );
}

export default TodoForm;