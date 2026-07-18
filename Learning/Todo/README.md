# 📝 React Tailwind v4 - Context API Todo Application

A modern, lightweight, and highly interactive Todo Application built using React.js and Tailwind CSS v4. This project manages tasks globally using the React Context API, eliminating prop-drilling completely.

---

# 🌐 Live Demo

- 🔗 Live : [https://mh56-todo.vercel.app](https://mh56-todo.vercel.app)

---

## ✨ Features

- 🌐 **Global State Management** – Uses React Context API to synchronize tasks across isolated form and item list components.
- 🎨 **Tailwind v4 Interactive UI** – Responsive dark theme layout wrapped inside a modern micro-grid styling effect.
- 📊 **Real-time Task Tracking** – Displays total active items alongside live counts of completed operations.
- 💾 **Local Storage Synchronization** – Automatically preserves, caches, and reloads task inputs across state updates or hard browser refreshes.

---

## 🛠️ Tech Stack

* **Framework:** React.js (Vite Template)
* **Styling:** Tailwind CSS
* **Language:** JavaScript (ES6+), HTML

---

## 🎯 Component & Context Overview

### Core Components & Context

| Component / File | Purpose |
|------------------|---------|
| **ToDo.js** | Initializes the central context layer alongside structured definitions for global schemas. |
| **TodoForm.jsx** | Captures active keyboard input and dispatches tasks into the centralized repository engine. |
| **TodoItems.jsx** | Implements inline task edits, validation updates, state toggles, and deletion requests. |
| **App.jsx** | Serves as the data distribution layer, injecting persistent LocalStorage logic chains. |

---

## 📂 Project Structure

**Root Path:** `workspace/Todo`

```text
├── 📁 public
├── 📁 src
│   ├── 📁 Components
│   │   ├── 📄 TodoForm.jsx
│   │   ├── 📄 TodoItems.jsx
│   │   ├── 📄 index.js
│   ├── 📁 Context
│   │   ├── 📄 ToDo.js
│   │   ├── 📄 index.js
│   ├── 🎨 App.css
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   ├── 📄 main.jsx
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
cd Project

# Install required packages
npm install

# Start the local development server
npm run dev
```

---

## 🚀 Core Concepts Covered

- **`React.createContext()`**: Declaring a global context hub to safely store arrays and task events out of component spaces.
- **`<TodoProvider>`**: Wrapping application layout scopes to supply structural values uniformly.
- **`useContext(TodoContext)`**: Directly binding external actions to deep interface listeners seamlessly.
- **Functional State Upgrades**: Handling reactive data states by matching structural object declarations.

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