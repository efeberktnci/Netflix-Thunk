import { useSelector } from 'react-redux'
import { baseImgUrl } from '../constant';
const Hero = () => {
  const state = useSelector((store) => store.movie); 

  const i = Math.round(Math.random() * state.popularMovies.length)

  const randomMovie= state.popularMovies[i]

  console.log(randomMovie)
    
  return (
  <div> 
  {!randomMovie ? (
    <p>Loading...</p>
  ) : (
    <>
      <div>
       <h1>{randomMovie.title}</h1>
       <p>{randomMovie.overview} </p>
       <p>
        <span>IMDB: {randomMovie.vote_average} </span>
        <span></span>
       </p>
       <div>
         <button>Watch The Film</button>
         <button>Add to the List</button>
       </div>
      </div>

      <div>
        <img src= {baseImgUrl + randomMovie.backdrop_path} />
      </div>
    </>


  )}


  </div>

  )
  
}

export default Hero