import axios from "axios";
import { useEffect , useState } from "react";
import { baseImgUrl, options } from "../constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="p-4">
      <h1 className="mb-3" > {genre.name} </h1>

      <Splide options={{
        autoWidth: true,
        rewind: true,
        gap: "10px",
        pagination: false,
      }}>
       {movies?.map((movie) => (
          <SplideSlide>
            <Link to={`/detay/${movie.id}`} >
            <img className="movie" src={baseImgUrl + movie.poster_path}/>
            </Link>
          </SplideSlide>
        ))
       }
      </Splide>
    </div>
  );
};

export default MovieList;
