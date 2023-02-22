import {useState, useEffect} from 'react'
import PhotoCarousel from '../components/PhotoCarousel.jsx'


const Contact = () => {
  const [LCData, setLCData] = useState([])


  useEffect(() => {
    requestCardInfo()
  }, [])


const  requestCardInfo = async () => {
  await fetch("https://vast-dusk-40691.herokuapp.com/api/locations")
    .then((response) =>response.json())
    .then((data) => {
        setLCData(data.data)
    }) 
}

console.log(LCData)
  return (

    <div className='flex flex-col content '>
      <PhotoCarousel className = "z-0"/>

      <div className="contentContainer overflow-visible z-10 h-auto">
        <div className="bg-oliveGreen flex flex-row h-96 w-full rounded-lg opacity-95 -mt-24 mb-24 h-full rmd:hidden">
            {LCData.map(location => {

              return(
                <>
                  <div className='w-full h-auto p-12 flex flex-col gap-8'>
                    <div className='location text-white flex flex-col'>
                        <h2 className='text-3xl font-Montserrat self-center mb-8'>{location.attributes.Name}</h2>
                        <h2 className='text-xl font-Montserrat'>INFO</h2>
                        <a href = {location.attributes.mapUrl} target = "_blank" className='text-lg font-Montserrat'>Adresa: {location.attributes.Address}</a>
                        <span className='text-lg font-Montserrat'>Telefon Locatie: {location.attributes.phoneNo}</span>
                        <span className='text-lg font-Montserrat'>Sesizari: 0722670984</span>
                    </div>
                    <div className='text-white'>
                        <h2 className='text-xl font-Montserrat'>PROGRAM</h2>
                          <span className='text-lg font-Montserrat'>Luni - Vineri, {location.attributes.OpenHours}</span>
                          <br />
                        <span className='text-lg font-Montserrat'>Sambata, Duminica si de sarbatorile legale: INCHIS</span>
                    </div>
                  </div>
                </> 
              )
            })}
          
        </div>
        <div className='flex flex-col gap-8  items-center md:hidden'>
          {LCData.map(location => {
              return(
                <div id = "LocationCard" className='flex flex-col justify-start rmd:justify-center bg-oliveGreen locationCard my-12 p-8 pb-4 gap-10 rounded-md text-white'>
                  <div className='w-full h-auto p-12 flex flex-col gap-8'>
                    <div className='location text-white flex flex-col'>
                        <h2 className='text-3xl font-Montserrat text-center mb-8'>{location.attributes.Name}</h2>
                        <h2 className='text-xl font-Montserrat'>INFO</h2>
                        <a href = {location.attributes.mapUrl} target = "_blank" className='text-lg font-Montserrat'>Adresa: {location.attributes.Address}</a>
                        <span className='text-lg font-Montserrat'>Telefon Locatie: {location.attributes.phoneNo}</span>
                        <span className='text-lg font-Montserrat'>Sesizari: 0722670984</span>
                    </div>
                    <div className='text-white'>
                        <h2 className='text-xl font-Montserrat'>PROGRAM</h2>
                          <span className='text-lg font-Montserrat'>Luni - Vineri, {location.attributes.OpenHours}</span>
                          <br />
                        <span className='text-lg font-Montserrat'>Sambata, Duminica si de sarbatorile legale: INCHIS</span>
                    </div>
                  </div>
                </div> 
              )
              })}
        </div>
      </div>

      <div className='flex rmd:hidden'>
        <iframe  className = "w-full border-t-2 border-oliveGreen"  height="450" title='GaraDeNord' loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqxmYo80BskARpKCTH-Jk5PQ&key=AIzaSyA_VhaJxPdmUy0Nfcl5FGY6YlX13Qcfn4I"></iframe>
        <div className='w-4 bg-oliveGreen rounded-full '></div>
        <iframe className='w-full' height="450" title='Pipera' loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJR7eTjXUDskARB3QBoh9DlfM&key=AIzaSyA_VhaJxPdmUy0Nfcl5FGY6YlX13Qcfn4I"></iframe>
      </div>
    </div>
    
    
  )
}

export default Contact


//AIzaSyA_VhaJxPdmUy0Nfcl5FGY6YlX13Qcfn4I