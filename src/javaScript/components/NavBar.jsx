import {useState, useEffect} from "react";
import '../../css/Main.css'
import logoname from '../logoCucinaname.png'
import menuIcon from '../mobileMenuIcon.svg'
import { slide as Menu } from 'react-burger-menu'
function NavBar () {
  const [toggleMbMenu, setToggleMbMenu] = useState(false)
 const showSettings = (event) => {
    event.preventDefault();
  }


    return(
        <nav className=" bg-oliveGreen h-20 flex flex-row justify-between items-center rxs:flex rxs:flex-row rxs:justify-between rxs:gap-2">
          <div className="rxs:flex rxs:flex-row rxs:justify-between ">
            <a href="https://cucinaromana.ro">
              <img src={logoname} className="h-10 rsm:h-6 w-auto" alt="Cucina Logo" />
            </a>
          </div>  
          <div>
            <ul className="flex flex-row gap-8  rsm:gap-2 NavMenutxtStyle  rmd:text-base md:text-lg rmd:gap-4">
                <li><button className="menuButton mobileText"><a href="/">Acasa</a></button></li>
                <li>|</li>
                <li><button className="menuButton mobileText"><a href="/MenuPipera">Meniu Pipera</a></button></li>
                <li>|</li>
                <li><button className="menuButton mobileText"><a href="/MenuGaraDeNord">Meniu Gara de Nord</a></button></li>
                <li>|</li>
                <li><button className="menuButton mobileText"><a href="/Contact">Contact</a></button></li>
              </ul>

            {/* <Menu right className="h-full md:hidden">
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ showSettings } className="menu-item--small" href="">Settings</a>
          </Menu> */}
          </div>
        </nav>
    ) 
}

export default NavBar