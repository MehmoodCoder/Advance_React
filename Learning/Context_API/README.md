# 🔐 React Context API - User Authentication Flow

A clean, interactive, and lightweight React application built to master **global state management** using React's native **Context API**. This project demonstrates how to share user authentication state across deeply nested components without prop drilling.

---

## ✨ Features

- 🔐 **Global Authentication State** – Share user login data across separate components (`Login` & `Profile`) effortlessly.
- 🎨 **Minimalistic dark UI** – Clean and dark interface with custom-styled input fields, buttons, and responsive layouts.
- ⚡ **Prop-Drilling Solved** – Utilizes React Context Provider to make the state accessible directly where needed.
- 🔄 **Real-Time UI Updates** – Instant state reactions displaying custom welcome messages once credentials are submitted.

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite Template)
* **Styling:** Custom CSS (`Styles.css`)
* **Language:** JavaScript (ES6+), HTML

---

## 🎯 Component & Context Overview

### Core Components & Context

| Component / File | Purpose |
|------------------|---------|
| **UserContext.js** | Initializes the global `UserContext` using `React.createContext()`. |
| **UserContextProvider.jsx** | Wraps the application and manages the active `User` and `setUser` states. |
| **Login.jsx** | Captures input credentials (username/password) and updates the global context on submit. |
| **Profile.jsx** | Consumes the context to dynamically display the logged-in user or a prompt to log in. |

---

## 📂 Project Structure

**Root Path:** `workspace\Context_API`

```text
├── 📁 public
├── 📁 src
│   ├── 📁 Components
│   │   ├── 📄 Login.jsx
│   │   ├── 📄 Profile.jsx
│   │   └── 🎨 Styles.css
│   ├── 📁 Context
│   │   ├── 📄 UserContext.js
│   │   └── 📄 UserContextProvider.jsx
│   ├── 🎨 App.css
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   ├── 📄 main.jsx
│   └── 📄 reportWebVitals.js
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
cd ADVANCE_REACT/Learning/Context_API

# Install required packages
npm install

# Start the local development server
npm run dev
```

---

## 🚀 Core Concepts Covered

- **`React.createContext()`**: Instantiating a global context to store shared states safely outside components.
- **`<Context.Provider>`**: Wrapping child trees to pass values down seamlessly without rendering blockages.
- **`useContext(Context)`**: Directly importing and manipulating global states inside sibling components (`Login` & `Profile`).
- **State Initialization**: Working with React's functional state updates (`useState`) inside a Provider module.

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