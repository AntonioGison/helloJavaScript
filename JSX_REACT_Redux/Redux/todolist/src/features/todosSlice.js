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
        const idToCheck = action.payload;

        //example of what's inside the const todo: { id: 2, title: "Example Todo 2", completed: false }
        //find return the object with that id, the whole object
        const todo = state.find(todo => todo.id === idToCheck);
        if (todo) {
          todo.completed = !todo.completed;
        }
      }
  },
});

export const { addTodo, removeTodo, completedTodo } = todosSlice.actions;

export default todosSlice.reducer;
