import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: selectedTaskId }) => {
            const index = tasks.findIndex(({ id }) => id === selectedTaskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: selectedTaskId }) => {
            const index = tasks.findIndex(({ id }) => id === selectedTaskId);
            tasks.splice(index, 1);
        },
        markAllDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.loading = false;
            state.tasks = tasks;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    markAllDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectAllTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectLoadingStatus = state => selectTasksState(state).loading;

export default tasksSlice.reducer;