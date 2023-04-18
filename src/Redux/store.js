import { applyMiddleware, legacy_createStore } from "redux";
import myReducer from "./reducer/reducer";

const store = legacy_createStore(myReducer);

export default store;