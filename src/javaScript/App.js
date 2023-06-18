import MenuPipera from './pages/MenuPipera.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact.jsx'
import React, {useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import  Home  from './pages/Home.jsx';
import MenuGara from './pages/MenuGara.jsx'
import Privacy from './pages/Privacy.jsx'
function App() {

  const [menusPipera, setMenusPipera] = useState([])
  const [menusGara, setMenusGara] = useState([])
  const [texts, setTexts] = useState([])
  const [LCData, setLCData] = useState([])


  useEffect(() => {
    requestMenusPipera()
    requestMenusGara()
    requestTexts()
    requestCardInfo()
  }, [] )


  const  requestMenusPipera = async () => {
    await fetch("https://backend-cucina-4d60cb73f5a9-40691.herokuapp.com/api/menus?populate=*")
      .then((response) =>response.json())
      .then((data) => {
          setMenusPipera(data.data)
      }) 
  }

  const  requestMenusGara = async () => {
    await fetch("https://backend-cucina-4d60cb73f5a9-40691.herokuapp.com/api/menu-gara-de-nords?populate=*")
      .then((response) =>response.json())
      .then((data) => {
          setMenusGara(data.data)
      }) 
  }

  const  requestTexts = async () => {
    await fetch("https://backend-cucina-4d60cb73f5a9-40691.herokuapp.com/api/texts")
      .then((response) =>response.json())
      .then((data) => {
          setTexts(data.data)
      }) 
}
  const  requestCardInfo = async () => {
    await fetch("https://backend-cucina-4d60cb73f5a9-40691.herokuapp.com/api/locations")
      .then((response) =>response.json()) 
      .then((data) => {
          setLCData(data.data)
      }) 
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path = '/' element={<Home LCData = {LCData}/>} />
        <Route path = '/menuPipera' element={<MenuPipera menus = {menusPipera} texts = {texts}/>} />
        <Route path = '/menuGaraDeNord' element={<MenuGara menus = {menusGara} texts = {texts}/>} />
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/privacy' element={<Privacy/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
