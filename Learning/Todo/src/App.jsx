import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./Context";
import TodoForm from "./Components/TodoForm";
import TodoItems from './Components/TodoItems';

function App() {
  const [Todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const UpdateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)),
    );
  };

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const Completed = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, Completed: !prevTodo.Completed }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos));
  }, [Todos]);

  const completedCount = Todos.filter(t => t.Completed).length;

  return (
    <TodoProvider value={{ Todos, AddTodo, DeleteTodo, UpdateTodo, Completed }}>
      <div className="bg-[#0f172a] min-h-screen py-6 px-4 sm:py-12 antialiased relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60"></div>
        
        <div className="w-full max-w-2xl mx-auto backdrop-blur-md bg-[#1e293b]/40 border border-[#334155]/60 shadow-2xl rounded-2xl p-5 sm:p-8 text-white relative z-10 transition-all duration-300">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Task Workspace
            </h1>
            <p className="text-[#94a3b8] text-sm mt-2 font-medium">
              Streamline your workflow with context management
            </p>
          </div>

          <div className="mb-6">
            <TodoForm />
          </div>

          {Todos.length > 0 && (
            <div className="flex justify-between items-center mb-4 px-1 text-xs sm:text-sm font-semibold text-[#94a3b8] border-b border-[#334155]/40 pb-2">
              <span>Total Tasks: {Todos.length}</span>
              <span className="text-emerald-400">Completed: {completedCount}/{Todos.length}</span>
            </div>
          )}

          <div className="flex flex-col gap-y-3 max-h-[50vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-700">
            {Todos.length === 0 ? (
              <div className="text-center py-10 border border-dashed border-[#334155] rounded-xl bg-[#1e293b]/20">
                <span className="text-4xl block mb-2">🚀</span>
                <p className="text-[#64748b] text-sm font-medium">No tasks yet. Add something above to get started!</p>
              </div>
            ) : (
              Todos.map((todo) => (
                <div key={todo.id} className="w-full transform transition-all duration-200 hover:-translate-y-0.5">
                  <TodoItems todo={todo} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;