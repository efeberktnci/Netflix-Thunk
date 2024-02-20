import { createStore, combineReducers , applyMiddleware } from "redux";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";



const rootReducer = combineReducers({
    movie: movieReducer
})

export default createStore(rootReducer , applyMiddleware(thunk))