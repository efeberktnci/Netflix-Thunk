import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres, getPopular } from "../Redux/actions/movieActions";
import Hero from "../components/Hero";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const state = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />

      {state.isLoading ? (
        <div class="spinner-border text-primary" role="status"></div>
      ) : state.isError ? (
        <p> An error occurred {state.isError} </p>
      ) : (
        state.genres.map((genre) =>  ( 
        <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
