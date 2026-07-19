import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="mt-4">
      {todos.length > 0 && (
        <div className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-3 px-1">
          Active Tasks Stack — {todos.length}
        </div>
      )}

      <ul className="list-none flex flex-col gap-y-2.5 max-h-[45vh] overflow-y-auto pr-1 scrollbar-thin">
        {todos.length === 0 ? (
          <div className="text-center py-8 border border-dashed border-[#21262d] rounded-xl bg-[#0d1117]/20">
            <span className="text-3xl block mb-2">🎯</span>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">All deployments complete. Workspace idle.</p>
          </div>
        ) : (
          todos.map((todo) => (
            <li
              className="flex justify-between items-center bg-[#161b22]/70 border border-[#30363d]/30 hover:border-[#30363d]/80 px-4 py-3 rounded-xl transition-all duration-200 group transform hover:-translate-y-0.5 shadow-sm"
              key={todo.id}
            >
              <div className="text-slate-200 text-sm font-medium tracking-wide truncate max-w-[75%] sm:max-w-[85%]">
                {todo.text}
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#21262d]/50 border border-[#30363d]/40 text-rose-400/80 hover:text-rose-400 hover:bg-rose-950/30 hover:border-rose-500/30 transition-all duration-150 shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default Todos