import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../constant";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `/movie/${id}?append_to_response=credits%2Cvideos&language=en-US`,
        options
      )
      .then((res) => setMovie(res.data));
  }, []);

  console.log(movie);
  return (
    <div className="row">
      {!movie ? (
        <div class="spinner-border text-primary" role="status"></div>
      ) : (
        <>
          <div className="col-12 banner">
            <img
              className="w-100 h-100 object-fit-cover"
              src={baseImgUrl + movie.backdrop_path}
            />
            <div className="banner-bg">
              <span>{movie.title}</span>
            </div>
          </div>

          <div className="col-md-6 mt-4 p-4">
            {/* 1) Producer Companies */}
            <h3>Producer Companies</h3>

            <div className="d-flex flax-wrap gap-4">
              {movie.production_companies.map((i) => (
                <div className="bg-white rounded p-2 d-flex align-items-center">
                  {i.logo_path ? (
                    <img
                      className="object-fit-contain"
                      width={100}
                      height={40}
                      src={baseImgUrl + i.logo_path}
                    />
                  ) : (
                    <span className="company">{i.name}</span>
                  )}
                </div>
              ))}
            </div>

            {/* 2) Languages */}
            <h3>Spoken Languages</h3>

            <div className="d-flex flax-wrap gap-4">
              {movie.spoken_languages.map((i) => (
                <div className="bg-white rounded p-2 d-flex align-items-center">
                    <span className="company">{i.name}</span>
                </div>
              ))}
            </div>

            {/* 3) Producer Countries*/}

            <h3>Producer Countries</h3>

            <div className="d-flex flax-wrap gap-4">
              {movie.production_companies.map((i) => (
                <div className="bg-white rounded p-2 d-flex align-items-center">
                    <span className="company">{i.name}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
