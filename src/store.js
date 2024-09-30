import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todoSlice';

// Create the Redux store
const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default store;