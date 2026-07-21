import { createSlice, nanoid } from '@reduxjs/toolkit';

const getInitialTasks = () => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch {
            return [];
        }
    }
    return [{ id: nanoid(), title: 'Add Task', description: 'Add Description', tag: 'Add Tag' }];
};

const initialState = {
    tasks: getInitialTasks()
};

const saveToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const TaskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        AddTask: (state, action) => {
            const NewTask = {
                id: nanoid(),
                title: action.payload.Title,
                description: action.payload.Description,
                tag: action.payload.Tag,
            };
            state.tasks.push(NewTask);
            saveToLocalStorage(state.tasks);
        },
        
        DeleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            saveToLocalStorage(state.tasks);
        },

        EditTask: (state, action) => {
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        title: action.payload.Title,
                        description: action.payload.Description,
                        tag: action.payload.Tag
                    };
                }
                return task;
            });
            saveToLocalStorage(state.tasks);
        },
    }
});

export const { AddTask, DeleteTask, EditTask } = TaskSlice.actions;

export default TaskSlice.reducer;