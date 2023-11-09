import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos.js";
import {counter} from '../modules/counter.jsx'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos,
    counter
  }

});

export default store;