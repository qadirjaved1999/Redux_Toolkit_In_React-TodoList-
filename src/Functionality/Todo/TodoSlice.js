import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial State
const initialState = {
    todos: [
        {
            id: 1,
            todoTitle: "todo text"
        }
    ]
}

// Reducer or Slice Almost same
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // If you can declear an other place then can write function just pass reference like this.
        // addTodo: addTodoFunction
        addTods: (state, action) => {
            const todo = {
                id: nanoid(),
                todoTitle: action.payload 
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})


export const {addTods, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;