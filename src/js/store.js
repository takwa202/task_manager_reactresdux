import { createStore } from "redux";
import {reducertask}from './reducer/reducer';
const dvt =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(reducertask,dvt);