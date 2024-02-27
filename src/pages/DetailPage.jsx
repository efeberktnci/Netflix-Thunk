import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../constant";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    axios
      .get(
        `/movie/${id}?append_to_response=credits%2Cvideos&language=en-US`,
        options
      )
      .then((res) => setMovie(res.data));
  }, []);

  return (
    <div className="row" >
      {!movie ? (
        <div class="spinner-border text-primary" role="status"></div>
      ) : (
        <>
          <div className="col-12 banner" >
            <img 
            className="w-100 h-100 object-fit-cover" 
            src={baseImgUrl+ movie.backdrop_path} 
            />
            <div className="banner-bg" >
              <span>{movie.title}</span>
            </div>

          </div>
        </>
      )}
    </div>
   
  );
};

export default DetailPage;
