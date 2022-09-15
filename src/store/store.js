import counterReducer from "./counterReducer";
import { combineReducers, createStore } from "redux";
import todoReaducer from "./todoReducer";
var reducer = combineReducers({counter:counterReducer,todolist:todoReaducer})
var mainstore = new createStore(reducer)

export default mainstore;