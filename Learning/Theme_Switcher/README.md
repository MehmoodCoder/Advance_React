# 🎨 React Tailwind v4 - Theme Switcher Card

An interactive, responsive product card built using React and Tailwind CSS v4 that implements dynamic theme shifting (Light & Dark mode) via the React Context API.

---

## ✨ Features

- 🌓 **Integrated Toggle Switch** – Theme toggle button embedded directly inside the product card for a seamless layout.
- 🎨 **Tailwind v4 Powered** – Implements class-based dark variants using Tailwind v4 standard configuration rules.
- 📱 **Fully Responsive** – Centered layout styling that auto-adjusts perfectly across standard mobile and desktop screens.

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
| **Theme.js** | Initializes the global theme context using `React.createContext()`. |
| **Cart.jsx** | Renders the responsive product card UI and embeds the interactive theme switcher toggle button. |
| **App.jsx** | Handles global theme hooks state and dynamically updates HTML root element utility selectors. |

---

## 📂 Project Structure

**Root Path:** `workspace/Theme_Switcher`

```text
├── 📁 public
├── 📁 src
│   ├── 📁 Components
│   │   ├── 📄 ThemeBtn.jsx
│   │   ├── 📄 Cart.jsx
│   ├── 📁 Context
│   │   ├── 📄 Theme.js
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

- **`React.createContext()`**: Instantiating a global theme context to store dark and light mode values safely outside components.
- **`<ThemeProvider>`**: Wrapping the application layout tree to pass down state values seamlessly without rendering blockages.
- **`useTheme()` Custom Hook**: Directly consuming and toggling global states inside the integrated product card component.
- **State Optimization**: Working with React's functional state updates (`useState`) alongside `useEffect` to inject styles directly into the HTML root layer.

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