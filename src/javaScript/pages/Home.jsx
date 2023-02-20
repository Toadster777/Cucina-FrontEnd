import {useState, useEffect} from 'react'
import PhotoCarousel from '../components/PhotoCarousel'
import LocationCard from '../components/LocationCard'
import SideMenu from '../components/SideMenu'

const Home = () => {
  const [photos, setPhotos] = useState([])
  const [carouselPhotos, setCarouselPhotos] = useState([])
  const [LCData, setLCData] = useState([])
  useEffect(() => {
      requestPhotos()
      requestCardInfo()
    }, [] )


  useEffect(() => {
    createObjArray()
  }, [photos])

  const  requestPhotos = async () => {
      await fetch("https://vast-dusk-40691.herokuapp.com/api/photos?populate=*")
        .then((response) =>response.json())
        .then((data) => {
            setPhotos(data.data[0].attributes.HomePhotos.data) 
        }) 
    }

    const  requestCardInfo = async () => {
      await fetch("https://vast-dusk-40691.herokuapp.com/api/locations")
        .then((response) =>response.json())
        .then((data) => {
            setLCData(data.data)
        }) 
    }
   
    const photoObj = function(image){
      this.image = image; 
    }

    const createObjArray = () => {
      let carouselPhotosLocal = []
      photos.map(photo => {
          let obj = new photoObj(photo.attributes.url, '')
          carouselPhotosLocal.push(obj)
          })
      setCarouselPhotos(carouselPhotosLocal)
      
    }
  return (
    <>
      <PhotoCarousel/>
      <div className='flex flex-col w-full content'>
        

        <div className='contentContainer flex justify-between arrangeColumn'>
            <LocationCard data = {LCData}/>

        </div>
      </div>
    </>      
  )
}

export default Home
