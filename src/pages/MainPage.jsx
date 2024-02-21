import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getGenres, getPopular } from "../Redux/actions/movieActions"
import Hero from "../components/Hero";


const MainPage = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPopular())

    dispatch(getGenres())
  }, []);

  return (
    <div>
     <Hero/>
    </div>
  )
}

export default MainPage