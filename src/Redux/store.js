import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import myReducer from "./reducer/reducer";

const store = legacy_createStore(myReducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;