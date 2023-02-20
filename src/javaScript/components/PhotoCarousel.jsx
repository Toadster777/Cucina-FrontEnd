import {useState, useEffect}  from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const PhotoCarousel = () => {
    const [photos, setPhotos] = useState([])
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        requestPhotos()
       
      }, [] )

    useEffect(() => {
      setWidth(window.innerWidth)
    }, [window.innerWidth])


    const  requestPhotos = async () => {
        await fetch("https://vast-dusk-40691.herokuapp.com/api/photos?populate=*")
          .then((response) =>response.json())
          .then((data) => {
              setPhotos(data.data[0].attributes.HomePhotos.data) 
          }) 
      }
     
    

      const photoObj = function(image){
        this.src = image; 
      }

      const createObjArray = () => {
        let carouselPhotosLocal = []
        photos.map(photo => {
            let obj = new photoObj(photo.attributes.url, '')
            carouselPhotosLocal.push(obj)
            })
        return carouselPhotosLocal
        
      }

      return (
        <div className=''>
        <Carousel images={createObjArray()} isLoop = {true} canAutoPlay = {true} isAutoPlaying = {true} autoPlayInterval = {5000} hasLeftButton = {false} hasRightButton = {false} hasSizeButton = {false} hasIndexBoard = {false} hasThumbnails = {false} hasMediaButton = {false} transitionSpeed = {0.4} style={{ height: 650, width: "auto" }} />
        </div>
      );
}
       

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default PhotoCarousel