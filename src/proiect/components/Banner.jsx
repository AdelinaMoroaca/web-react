import banner from '../assets/banner.jpg'
import "./Banner.css";


function Banner(){
    return(
      <div>
        <img id = 'banner' src={banner} alt="Banner" />
      </div>
    )
}

export default Banner;