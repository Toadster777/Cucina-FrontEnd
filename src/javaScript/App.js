import Home from './pages/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import React, {useEffect, useState } from 'react';
function App() {

  const [menus, setMenus] = useState([])
  const [texts, setTexts] = useState([])

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

  useEffect(() => {
    requestMenus()
    requestTexts()
  }, [] )


  return (
    <div className="App">
      <NavBar />
      <Home menus = {menus} texts = {texts}/>
      <Footer/>
    </div>
  );
}

export default App;
