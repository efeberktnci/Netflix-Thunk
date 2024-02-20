import { useSelector } from 'react-redux'

const Hero = () => {
  const state = useSelector((store) => store.movie); 
  

  return <div> Hero </div>
    
  
}

export default Hero