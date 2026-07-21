import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { taskApi } from "../service/taskApi";

export const fetchTasksAsync = createAsyncThunk("tasks/fetchTasks", async () => {
  return await taskApi.fetchTasks();
});

export const addTaskAsync = createAsyncThunk("tasks/addTask", async (task) => {
  return await taskApi.addTask(task);
});

export const editTaskAsync = createAsyncThunk("tasks/editTask", async (task) => {
  return await taskApi.editTask(task);
});

export const deleteTaskAsync = createAsyncThunk("tasks/deleteTask", async (id) => {
  return await taskApi.deleteTask(id);
});

const asyncTaskSlice = createSlice({
  name: "asyncTasks",
  initialState: {
    items: [],
    status: "idle",
    searchTerm: "",
    selectedTag: "all",
    sortBy: "newest",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSelectedTag: (state, action) => {
      state.selectedTag = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(addTaskAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTaskAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.unshift(action.payload);
      })
      .addCase(editTaskAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editTaskAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteTaskAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.filter((t) => t.id !== action.payload);
      });
  },
});

export const { setSearchTerm, setSelectedTag, setSortBy } = asyncTaskSlice.actions;
export default asyncTaskSlice.reducer;