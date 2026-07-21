const STORAGE_KEY = "devcore_api_db";

const getDB = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    const initial = [
      { id: "1", title: "Build Authentication API", description: "Implement JWT login and register endpoints.", tag: "django" },
      { id: "2", title: "Setup Redux Store", description: "Configure Redux Toolkit async thunks for state management.", tag: "redux" },
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    return initial;
  }
  return JSON.parse(data);
};

const saveDB = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

export const taskApi = {
  fetchTasks: async () => {
    await new Promise((res) => setTimeout(res, 800)); // Simulating Server Delay
    return getDB();
  },

  addTask: async (task) => {
    await new Promise((res) => setTimeout(res, 800));
    const db = getDB();
    const newTask = { ...task, id: Date.now().toString() };
    const updated = [newTask, ...db];
    saveDB(updated);
    return newTask;
  },

  editTask: async (task) => {
    await new Promise((res) => setTimeout(res, 800));
    const db = getDB();
    const updated = db.map((t) => (t.id === task.id ? task : t));
    saveDB(updated);
    return task;
  },

  deleteTask: async (id) => {
    await new Promise((res) => setTimeout(res, 800));
    const db = getDB();
    const updated = db.filter((t) => t.id !== id);
    saveDB(updated);
    return id;
  },
};