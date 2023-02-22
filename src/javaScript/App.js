import MenuPage from './pages/MenuPage.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact.jsx'
import React, {useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import  Home  from './pages/Home.jsx';
function App() {

  const [menus, setMenus] = useState([])
  const [texts, setTexts] = useState([])
  const [LCData, setLCData] = useState([])


  useEffect(() => {
    requestMenus()
    requestTexts()
    requestCardInfo()
  }, [] )


  const  requestMenus = async () => {
    await fetch("https://vast-dusk-40691.herokuapp.com/api/menus?populate=*")
      .then((response) =>response.json())
      .then((data) => {
          setMenus(data.data)
      }) 
  }

  const  requestTexts = async () => {
    await fetch("https://vast-dusk-40691.herokuapp.com/api/texts")
      .then((response) =>response.json())
      .then((data) => {
          setTexts(data.data)
      }) 
}
  const  requestCardInfo = async () => {
    await fetch("https://vast-dusk-40691.herokuapp.com/api/locations")
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
        <Route path = '/Menus' element={<MenuPage menus = {menus} texts = {texts}/>} />
        <Route path = '/Contact' element={<Contact/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
