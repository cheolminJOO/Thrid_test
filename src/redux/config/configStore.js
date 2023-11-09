import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";
import counterSlice from '../modules/counter.js'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos,
    counterSlice
  }

});

export default store;