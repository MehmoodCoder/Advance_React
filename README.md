# ⚛️ Advance_React

🚀 **Advance React & State Management Hub** — A comprehensive, production-ready repository featuring core state management implementations, React Hooks, Redux Toolkit, Context API, and full-fledged task management applications. Every concept and project is neatly organized in its respective directory.

🚀 React State Masterclass! ⚛️ Experience clean global state flows! Features User Auth via Context API 🔐 alongside a dynamic Shopping Cart powered by Redux Toolkit (RTK) 🛒 with dual slices, centralized configureStore 📦, and async thunks for live API product fetching! ⚡

---

## 🔗 Live Deployments

- 🌐 **DevCore Workspace (Live):** [mh56-devcore-workspace.vercel.app](https://mh56-devcore-workspace.vercel.app)
- 🌐 **Todo:** [mh56-todo.vercel.app](https://mh56-todo.vercel.app)
- 🌐 **Portfolio:** [mh56-portfolio.vercel.app](https://mh56-portfolio.vercel.app)

---

## 🚀 Core Concepts Covered

- **Global State Management:** Centralized state flows using Redux Toolkit (`@reduxjs/toolkit`) and React Redux (`react-redux`).
- **Asynchronous Operations:** Handling side effects and dynamic store updates using `createAsyncThunk` and `extraReducers`.
- **Context API & Providers:** Sharing global scope and themes without prop drilling (`createContext`, `useContext`).
- **Local Storage Integration:** Persisting client-side data state across session reloads.
- **Form Controls & Editing States:** Synchronizing complex forms with active state selectors (`useSelector`, `useDispatch`).
- **Tailwind CSS Styling:** Responsive UI components built with modern utility classes.

---

## 💻 Projects & Learning Modules Included

### 💼 DevCore Workspace
> **Folder:** `Tech_Task/`

A full-featured developer task and goal tracking web application integrated with Redux Toolkit and dynamic state storage.
- **Features:** Create, edit, delete tasks, real-time tag filtering, search, sorting, dynamic active session toggle.
- **Concepts:** `configureStore`, `createSlice`, `createAsyncThunk`, local storage API sync, `useDispatch`, `useSelector`.
- **Live** [mh56-devcore-workspace.vercel.app](https://mh56-devcore-workspace.vercel.app)

---

### ⚛️ Context API State Management
> **Folder:** `Learning/Context_API/`

Demonstrates lightweight global state sharing across nested components without prop-drilling.
- **Features:** Shared state access across sibling modules, dynamic provider wrappers.
- **Concepts:** `createContext`, `useContext`, Provider patterns.

---

### 📝 Redux Toolkit Todo App
> **Folder:** `Learning/Redux_Toolkit_Todo/`

A fundamental task application built to master Redux Toolkit slices, reducers, and store setup.
- **Features:** Add task, delete task, list rendering, clean action dispatching.
- **Concepts:** Redux store setup, `createSlice`, payload handling.

---

### 🌗 Theme Switcher
> **Folder:** `Learning/Theme_Switcher/`

Interactive dark and light mode theme management built using Context API.
- **Features:** Dynamic HTML class toggling, persistent theme state selection.
- **Concepts:** React Context, DOM manipulation, conditional class application.

---

### 📋 Basic Todo App
> **Folder:** `Learning/Todo/`

A clean, light local state task manager covering standard React hook patterns.
- **Features:** Item addition, deletion, list key management.
- **Concepts:** `useState`, form input handling, array operations.
- **Live** [mh56-todo.vercel.app](https://mh56-todo.vercel.app)

---

## 🛠️ Environment & Tools

| Tool / Technology | Purpose |
|---|---|
| **React** | UI library |
| **Redux Toolkit** | Centralized global state management |
| **React Redux** | Official React bindings for Redux |
| **Vite** | Build tool & high-speed dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **JavaScript (ES6+)** | Modern client script logic |
| **Node.js / npm** | Package execution & dependency runtime |
| **Vercel** | Production hosting & continuous deployment |

---

## 📂 Project Directory Structure

```text
.
├── 📁 Learning
│   ├── 📁 Context_API
│   ├── 📁 Redux_Toolkit_Todo
│   ├── 📁 Theme_Switcher
│   └── 📁 Todo
├── 📁 Tech_Task
└── 📝 README.md
```

---

## 🛠️ Tech Stack

* **Framework:** React.js (Vite Template)
* **Styling:** Tailwind CSS 
* **Language:** JavaScript (ES6+), HTML, CSS
* **Hosting:** Vercel

---

## 📦 How to Setup & Build This Project From Scratch

Every time I initialize a new React + Tailwind CSS project, I follow these exact standard steps. You can use this guide to recreate or understand the workspace structure:

### Step 1: Initialize Vite Project

Run the following command in your terminal:

```bash
npm create vite@latest
```

## During the prompt configuration, fill out the selections exactly like this:

​Proceed? y 

​Project Name: Your_Project_Name 
​
Package Name: your_package_name ​

Select a framework: React ​

Select a variant: JavaScript 

​With oxy? No ​

Install with npm? Yes 

---

## 💻 How to Run the Project Local Environment 

​If you want to pull this project and run it again locally, simply execute these commands:

```
# Navigate to the project folder
cd Project

# Start the local development server
npm run dev
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** package manager
- Basic knowledge of React and JavaScript

### Installation

## 📦 Installing Redux Toolkit in React

To use Redux in your React project, install the required packages using either npm or yarn:

### Option 1: Single Command (Recommended)

```bash
npm install @reduxjs/toolkit react-redux
```

---

### Option 2: Step-by-Step Installation

#### Step 1: Install Core Redux Toolkit

Installs `@reduxjs/toolkit` which contains configureStore, createSlice, createAsyncThunk, and all essential RTK utilities.

```bash
npm install @reduxjs/toolkit
```

#### Step 2: Install React Redux Bindings

Installs `react-redux` which provides React hooks like useSelector, useDispatch, and the <Provider> wrapper to connect Redux with React components.

```bash
npm install react-redux
```

---

### Installing Tailwind CSS v4 (Vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

---

Add plugin to `vite.config.js`:
```js
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}
```

---

Add to `index.css`:
```css
@import "tailwindcss";
```

---

1. **Clone the repository**

```bash
git clone https://github.com/MehmoodCoder/Advance_React.git
cd Advance_React/Project Folder
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Run oxlint to check code quality and style.

---

## 🎨 Styling Guide

This project uses ** TailwindCSS ** for all styling.

---

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Connect your GitHub repository
5. Connect the exact project folder containing `package.json` to avoid nested directory issues
6. Vercel automatically detects Vite settings
7. Toggle the "Build Command" and write `npm run build` manually to override it
8. Click "Deploy"

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)

---

## 👤 Author

**MehmoodCoder**

- 🔗 GitHub: [github.com/MehmoodCoder](https://github.com/MehmoodCoder)
- 🌐 Portfolio: [My Portfolio Link](https://mh56-portfolio.vercel.app)

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- ✨ Responsive layout
- 📄 Project with RTK
- 💅 Tailwind CSS styling
- 📱 Mobile-responsive design

---

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)

---

### **Happy coding without chai ! ☕**