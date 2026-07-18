import React, { useState } from 'react';
import { useToDo } from '../Context/ToDo';

function TodoItems({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { UpdateTodo, DeleteTodo, Completed } = useToDo();

  const editTodo = () => {
    if (!todoMsg.trim()) return;
    UpdateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    Completed(todo.id);
  };

  return (
      <div
          className={`flex items-center border rounded-xl px-4 py-3 gap-x-3 shadow-md transition-all duration-300 group ${
              todo.Completed 
                ? "bg-emerald-950/30 border-emerald-500/30 text-emerald-300/80 line-through decoration-emerald-500/40" 
                : "bg-[#1e293b]/60 border-[#334155] text-slate-200"
          }`}
      >
          <div className="relative flex items-center justify-center shrink-0">
              <input
                  type="checkbox"
                  className="w-4 h-4 rounded cursor-pointer accent-emerald-500 text-white bg-slate-900 border-[#475569] focus:ring-emerald-500/20"
                  checked={todo.Completed}
                  onChange={toggleCompleted}
              />
          </div>

          <input
              type="text"
              className={`border-0 outline-none w-full bg-transparent text-sm font-medium transition-all duration-150 ${
                  isTodoEditable 
                    ? "bg-[#0f172a]/60 px-3 py-1 rounded-md ring-1 ring-blue-500/50 text-slate-100" 
                    : "focus:ring-0"
              }`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
              onKeyDown={(e) => {
                if (e.key === 'Enter') editTodo();
              }}
          />

          <div className="flex gap-x-1.5 shrink-0 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                  className={`inline-flex w-8 h-8 rounded-lg text-xs justify-center items-center border transition-all duration-150 ${
                      isTodoEditable 
                        ? "bg-emerald-600 border-emerald-500 text-white hover:bg-emerald-700" 
                        : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                  } disabled:opacity-40`}
                  onClick={() => {
                      if (todo.Completed) return;
                      if (isTodoEditable) {
                          editTodo();
                      } else setIsTodoEditable((prev) => !prev);
                  }}
                  disabled={todo.Completed}
              >
                  {isTodoEditable ? "💾" : "✏️"}
              </button>

              <button
                  className="inline-flex w-8 h-8 rounded-lg text-xs justify-center items-center bg-slate-800 border border-slate-700 text-rose-400 hover:bg-rose-950/40 hover:border-rose-500/40 hover:text-rose-400 transition-all duration-150"
                  onClick={() => DeleteTodo(todo.id)}
              >
                  🗑️
              </button>
          </div>
      </div>
  );
}

export default TodoItems;