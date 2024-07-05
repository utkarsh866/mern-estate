import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop autoPlay>
      <div >
        <img src="https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg" alt="Property 1" 
        className="object-fit "/>
      </div>
      <div >
        <img src="https://c0.wallpaperflare.com/preview/108/456/1011/white-and-brown-concrete-building.jpg" alt="Property 2" 
        className="object-fit "/>
      </div>
      <div  >
        <img src="https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_640.jpg" alt="Property 3"
        className="object-fit " />
      </div>
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default ImageCarousel;
