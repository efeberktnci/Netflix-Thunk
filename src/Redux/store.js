import { createStore, combineReducers } from "redux";
import movieReducer from "./reducers/movieReducer";
import {thunk} from "redux-thunk";



const rootReducer = combineReducers({
    movie: movieReducer
})

createStore(rootReducer,applyMiddleware(thunk))