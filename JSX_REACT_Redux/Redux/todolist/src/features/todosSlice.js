import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
  name: "todos",
  initialState:  [
    { id: 1, title: "Example Todo 1", completed: true },
    { id: 3, title: "Example Todo 2", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
        
    const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false
    };
        state.push(newTodo);
    },

    removeTodo: (state, action) => {
        const idToRemove = action.payload.id;
       return state.filter(todo => todo.id !== idToRemove);
          },

    completedTodo: (state, action) => {
        
    }
  },
});

export const { addTodo, removeTodo, completedTodo } = todosSlice.actions;

export default todosSlice.reducer;
