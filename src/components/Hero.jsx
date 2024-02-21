import { useSelector } from "react-redux";
import { baseImgUrl } from "../constant";
import Loading from "./Loading";
const Hero = () => {
  const state = useSelector((store) => store.movie);

  const i = Math.round(Math.random() * state.popularMovies.length);

  const randomMovie = state.popularMovies[i];

  console.log(randomMovie);

  return (
    <div className="hero row p-4">
      {!randomMovie ? (
        <Loading/>
      ) : (
        <>
          <div className="col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center ">
            <h1>{randomMovie.title}</h1>
            <p className="text-start">{randomMovie.overview} </p>
            <p>
              <span>IMDB: {randomMovie.vote_average} </span>
              <span className="text-warning p-x-2"></span>
            </p>
            <div className="d-flex gap-3">
              <button className="btn  btn-danger">Watch The Film</button>
              <button className="btn btn-info">Add to the List</button>
            </div>
          </div>

          <div className="col-md-6">
            <img
              className="img-fluid rounded shadow my-4"
              src={baseImgUrl + randomMovie.backdrop_path}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
