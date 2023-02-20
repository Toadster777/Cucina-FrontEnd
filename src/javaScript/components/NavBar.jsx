import {useState, useEffect} from "react";
import '../../css/Main.css'
import logoname from '../logoCucinaname.png'
import menuIcon from '../mobileMenuIcon.svg'
function NavBar () {
  const [toggleMbMenu, setToggleMbMenu] = useState(false)



    return(
      <>
        
        <nav className=" bg-oliveGreen h-20 flex flex-row justify-between items-center rxs:flex rxs:flex-row rxs:justify-between">
          <div className="rxs:flex rxs:flex-row rxs:justify-between rxs:w-full">
            <a href="https://cucinaromana.ro">
              <img src={logoname} className="h-8 sm:h-12 w-auto" alt="Cucina Logo" />
            </a>
          </div>  
          <div>
            <ul className="flex flex-row gap-10 NavMenutxtStyle rmd:hidden">
                <li><button className="menuButton"><a href="/">Acasa</a></button></li>
                <li>|</li>
                <li><button className="menuButton"><a href="/Menus">Meniuri</a></button></li>
                <li>|</li>
                <li><button className="menuButton"><a href="/Contact">Contact</a></button></li>
              </ul>
          </div>
        </nav>
        <div id="mobileMenu" className=" flex flex-row justify-center bg-navGrey w-auto h-12 md:hidden">
                <div className="contentContainer flex flex-row justify-between w-full">
                    <button><h2 className=' menuButton'>Acasa</h2>
                    </button>
                    <button><a href="/Menus"><h2 className=' menuButton'>Meniuri</h2></a></button>
                    <button><h2 className=' menuButton'>Contact</h2></button>
                </div>

        </div>
      </>
    ) 
}

export default NavBar