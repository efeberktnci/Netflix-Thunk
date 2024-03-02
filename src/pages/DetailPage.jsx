import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../constant";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

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

            <div className="col-md-6 mt-4 p-4">
              {/* 1) Producer Companies */}
              <h3 className="mt-4">Producer Companies</h3>

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
              <h3 className="mt-4">Spoken Languages</h3>

              <div className="d-flex flax-wrap gap-4">
                {movie.spoken_languages.map((i) => (
                  <div className="bg-white rounded p-2 d-flex align-items-center">
                    <span className="company">{i.name}</span>
                  </div>
                ))}
              </div>

              {/* 3) Producer Countries*/}

              <h3 className="mt-4">Producer Countries</h3>

              <div className="d-flex flax-wrap gap-4">
                {movie.production_countries.map((i) => (
                  <div className="bg-white rounded p-2 d-flex align-items-center">
                    <span className="company">{i.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 mt-4 p-4">
              {/* 1) Overview */}

              <p className="lead">{movie.overview} </p>

              {/* 2) Budget */}

              <p className="fs-5">
                <span className="fw-bold">Budget </span>:
                <span className="text-success">
                  {" "}
                  {millify(movie.budget)} ${" "}
                </span>
              </p>

              {/* 3) Revenue */}

              <p className="fs-5">
                <span className="fw-bold">Revenue </span>:
                <span className="text-success">
                  {" "}
                  {millify(movie.revenue)} $
                </span>
              </p>
            </div>

            <div className="col-12 p-4 my-3">
              <h2>Oyuncular</h2>

              <Splide
                options={{
                  height: "200px",
                  gap: "",
                  pagination: false,
                  autoWidth: true,
                }}
              >
                {movie.credits.cast.map((i) => (
                  <SplideSlide>
                    <div className="actor-card h-100">
                      <img
                        className="movie"
                        src={
                          i.profile_path
                            ? baseImgUrl + i.profile_path
                            : "/default.png"
                        }
                      />

                      <p>
                        <span>{i.character}</span>
                        <span>{i.name}</span>
                      </p>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
