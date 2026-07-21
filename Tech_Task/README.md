# 📝 DevCore Workspace - Tech Task Management App

A modern, full-featured developer task and module tracking application built using React.js, Redux Toolkit, RTK Query / Async Thunks, and Tailwind CSS. This project manages global application state cleanly without prop-drilling, featuring local persistence and asynchronous workflow sync.

---

# 🌐 Live Demo

- 🔗 Live : [https://mh56-devcore-workspace.vercel.app](https://mh56-devcore-workspace.vercel.app)

---

## ✨ Features

- 🌐 **Global State Management** – Uses Redux Toolkit (`@reduxjs/toolkit` & `react-redux`) to centralize state across forms, search bars, and task lists.
- 🎨 **Modern Workspace UI** – Styled using Tailwind CSS with dark mode aesthetics, interactive session indicators, and dynamic feedback states.
- 🔍 **Real-Time Filtering & Search** – Search through programming tasks, filter by specialized tags, and sort by date or priority.
- 🔄 **Async & Storage Sync** – Handles asynchronous data operations with thunks/services and synchronizes tasks directly with LocalStorage.
- ✏️ **Editing & Interactive State** – Smoothly toggle edit mode with automatic scrolling into task creation/update forms.

---

## 🛠️ Tech Stack

* **Framework:** React.js (Vite Template)
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`), React-Redux
* **Styling:** Tailwind CSS
* **Language:** JavaScript (ES6+), HTML, CSS

---

## 🎯 Component & Architecture Overview

### Core Components & Modules

| Component / File | Purpose |
|------------------|---------|
| **store.js** | Configures the central Redux store containing slices and service reducers. |
| **asyncTaskSlice.js** | Handles async thunk operations, task actions (add, edit, delete), and filter states. |
| **Slice.js** | Additional slice definition for synchronous local state updates. |
| **taskApi.js** | Handles external service logic and mock API interactions for tasks. |
| **AddTaskForm.jsx** | Captures input for new task creation and handles edit mode state updates. |
| **Dashboard.jsx** | Displays active task items, status indicators, and delete/edit dispatch triggers. |
| **SearchFilterBar.jsx** | Dispatches query and tag filter changes directly to the Redux store. |
| **App.jsx** | Main layout wrapper managing initial async task fetching and smooth scrolling refs. |

---

## 📂 Project Structure

**Root Path:** `Advance_React/Tech_Task`

```text
├── 📁 dist
├── 📁 node_modules
├── 📁 public
├── 📁 src
│   ├── 📁 app
│   │   └── 📄 store.js
│   ├── 📁 components
│   │   ├── 📄 AddTaskForm.jsx
│   │   ├── 📄 Dashboard.jsx
│   │   └── 📄 SearchFilterBar.jsx
│   ├── 📁 features
│   │   ├── 📄 asyncTaskSlice.js
│   │   └── 📄 Slice.js
│   ├── 📁 service
│   │   └── 📄 taskApi.js
│   ├── 🎨 App.css
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   └── 📄 main.jsx
├── ⚙️ .gitignore
├── ⚙️ .oxlintrc.json
├── 🌐 index.html
├── 📝 README.md
├── ⚙️ package-lock.json
├── ⚙️ package.json
└── 📄 vite.config.js
```

---

## 💻 How to Run the Project Locally

To test this project on your machine, simply run these commands:

```bash
# Navigate to the project directory
cd Tech_Task

# Install required packages
npm install

# Start the local development server
npm run dev
```

---

## 🚀 Core Concepts Covered

- **`configureStore()`**: Setting up a centralized state container combining slice reducers and middleware.
- **`createSlice()`**: Defining reducers, action creators, and initial state structures within unified slice files.
- **`createAsyncThunk()`**: Handling asynchronous operations, side effects, and promise lifecycle states (`pending`, `fulfilled`, `rejected`).
- **`useSelector()` & `useDispatch()`**: Accessing store state values and dispatching actions directly inside functional React components.
- **`<Provider store={store}>`**: Supplying global Redux store context to all nested application components.

---

## 👤 Author

**MehmoodCoder**

- 🔗 GitHub: [https://github.com/MehmoodCoder](https://github.com/MehmoodCoder)
- 🌐 Portfolio: [https://mh56-portfolio.vercel.app](https://mh56-portfolio.vercel.app)

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

### **Happy coding without chai ! ☕**
