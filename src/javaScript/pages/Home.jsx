import {useState, useEffect} from 'react'
import PhotoCarousel from '../components/PhotoCarousel'
import LocationCard from '../components/LocationCard'


const Home = ({LCData}) => {

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
