import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from './Type';

interface TaskState {
  idCount: number;
  tasks: Task[];
}

const initialState: TaskState = {
  idCount: 3,
  tasks: [
    { id: 3, title: 'TASK C', completed: false },
    { id: 2, title: 'TASK B', completed: true },
    { id: 1, title: 'TASK A', completed: false },
  ],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<string>) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },
    completeTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
