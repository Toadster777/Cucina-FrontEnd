import {useState, useEffect} from 'react'
import PhotoCarousel from '../components/PhotoCarousel'
import LocationCard from '../components/LocationCard'


const Home = ({LCData}) => {

  return (
    <>
      <PhotoCarousel/>
      <div className='flex flex-col w-full content'>
        

        <div className='contentContainer flex flex-col lg:flex-row items-center lg:justify-between arrangeColumn'>
            <LocationCard data = {LCData}/>

        </div>
      </div>
    </>      
  )
}

export default Home
