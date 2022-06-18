import Carousel from 'better-react-carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../images/p.jpg"
import image2 from "../images/q.jpg"
import image3 from "../images/r.jpg"
import image4 from "../images/s.jpg"

function App() {
  return (
    <>
    <div className="carousel">
      <Carousel cols={1} rows={1} loop>
      <Carousel.Item>
      <img src={image1} className="carousel-img" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} className="carousel-img" />
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} className="carousel-img" />
            </Carousel.Item>
      <Carousel.Item>
      <img src={image4} className="carousel-img" />
            </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default App;