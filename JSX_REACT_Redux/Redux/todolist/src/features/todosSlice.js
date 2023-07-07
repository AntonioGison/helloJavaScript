import { createSlice } from "@reduxjs/toolkit";


export const todosSlice = createSlice({
  name: "todos",
  initialState:  [
    { id: 1, title: "Example Todo 1", completed: false },
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

        const index = state.findIndex(todo => todo.id === action.payload.id);
        if (index > -1) { // only splice array when item is found
        state.splice(index, 1); // 2nd parameter means remove one item only
        }
    },

    completedTodo: (state, action) => {
        
    }
  },
});

export const { addTodo, removeTodo, completedTodo } = todosSlice.actions;

export default todosSlice.reducer;
