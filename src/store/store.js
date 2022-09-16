import counterReducer from "./counterReducer";
import { combineReducers, createStore } from "redux";
import todoReaducer from "./todoReducer";
import productReducer from "./productReducer";
var reducer = combineReducers({counter:counterReducer,todolist:todoReaducer,products:productReducer})
var mainstore = new createStore(reducer)

export default mainstore;