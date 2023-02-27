import React from 'react'
import logoCucina from '../logoCucina.png'
     const LocationCard = ({data}) => {
      const apiUrl = ['/menuPipera', '/menuGaraDeNord']

  return (
      data.map(location => {
        return (
          
          <div id = "LocationCard" className='flex flex-col justify-start bg-oliveGreen locationCard my-12 p-8 pb-4 gap-10 rounded-md text-white h-auto w-auto'>
            <div className='flex justify-center'>
              <img src={logoCucina} alt="Logo" className='h-24 w-24' /> 
            </div>
              
              <div className='location'>
                <h2 className='text-2xl font-Montserrat'>{location.attributes.Name}</h2>
                <span className='text-base font-Montserrat'>{location.attributes.Address}</span>
              </div>
              <div>
                <h2 className='text-lg font-Montserrat'>PROGRAM</h2>
                  <span className='text-base font-Montserrat'>Luni - Vineri, {location.attributes.OpenHours}</span>
                  <br />
                <span className='text-base font-Montserrat'>Sambata, Duminica si de sarbatorile legale: INCHIS</span>
              </div>
              <div className='flex flex-col justify-center gap-4'>
                <button type='button' className=' bg-white text-black text-base rounded py-2 locationCardBtn font-semibold'><a href={location.attributes.apiUrl}>VEZI MENIUL</a></button>
                <button  type='button' className='bg-white rounded py-2 locationCardBtn font-semibold'>
                  <a href={`tel:${location.attributes.phoneNo}`} className='text-base text-black'>Comanda Acum!</a>
                  </button>
                
              </div>
            
          </div>
        )
      })
  )
}

export default LocationCard
