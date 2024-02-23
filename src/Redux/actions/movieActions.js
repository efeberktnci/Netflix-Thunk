import axios from "axios";
import { options } from "../../constant";
import { ActionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

// Take the popular films from API and transfer to the store
export const getPopular = () => (dispatch) => {
  axios
    .get("/movie/popular?language=en", options)

    .then((res) =>
      dispatch({
        type: ActionTypes.SET_MOVIES,
        payload: res.data.results,
      })
    )
    .catch((err) => {
      dispatch({
        type: ActionTypes.SET_MOVIES_ERROR,
        payload: err.message,
      });
    });
};

// Take the categories from API and transfer to the store

export const getGenres = () => (dispatch) => {
  dispatch({ type: ActionTypes.SET_GENRES_LOADING });

  axios
    .get("/genre/movie/list?language=en", options)
    .then((res) => {
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      });
    })
    .catch((err) =>
      dispatch({
        type: ActionTypes.SET_GENRES_ERROR,
        payload: err.message,
      })
    );
};
