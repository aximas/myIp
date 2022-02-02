import {combineReducers, createStore} from "redux";
import mainReducer from "./main-redux";


let reducers = combineReducers({
    mainPage: mainReducer
})


let store = createStore(reducers);

export default store;