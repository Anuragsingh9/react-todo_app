import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Todo/TodoReducers";
import { legacy_createStore as createStore, combineReducers } from 'redux'


const store = createStore(todoReducer);

export default store;