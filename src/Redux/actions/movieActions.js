import axios from "axios";
import { options } from "../../constant";
import { ActionTypes } from "../actionTypes";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

// Bring the popular films and transfer to the store
export const getPopular = () => (dispatch) => {
  axios
  .get("/movie/popular?language=en", options)

  .then((res) =>
    dispatch({
      type: ActionTypes.SET_MOVIES,
      payload: res.data.results,
    })
  ).catch((err) => {
    dispatch({
        type: ActionTypes.SET_MOVIES_ERROR,
        payload:err.message,
    })
  })
};
