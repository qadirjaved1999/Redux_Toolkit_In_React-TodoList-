import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Functionality/Todo/TodoSlice";

export const Store = configureStore({
    reducer : TodoSlice
});

