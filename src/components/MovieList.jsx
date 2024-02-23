import axios from "axios";
import { useEffect , useState } from "react";
import { options } from "../constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => console.log(res.data.results));
  }, []);

  return (
    <div>
      <h2> {genre.name} </h2>

      <Splide>
        <SplideSlide>
          <img src="image1.pjg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="image2.pjg" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default MovieList;
