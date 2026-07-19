import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div className="bg-[#090d16] min-h-screen py-8 px-4 sm:py-16 antialiased relative overflow-hidden flex items-start justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141b2d_1px,transparent_1px),linear-gradient(to_bottom,#141b2d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70"></div>
      
      <div className="w-full max-w-xl mx-auto backdrop-blur-lg bg-[#111827]/40 border border-[#1f2937]/80 shadow-2xl rounded-2xl p-6 sm:p-8 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Redux Workspace
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5 font-medium">
            Advanced state management engine powered by RTK
          </p>
        </div>

        <div className="space-y-6">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </div>
  )
}

export default App