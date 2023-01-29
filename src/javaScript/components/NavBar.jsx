import React from "react";
import '../../css/Main.css'
import logoname from '../logoCucinaname.png'

function NavBar () {




    return(
        
        <nav className=" bg-oliveGreen h-20 flex md:flex-row md:justify-start items-center rxs:flex rxs:flex-row rxs:justify-between ">
          <div className="rxs:flex rxs:flex-row rxs:justify-between rxs:w-full">
            <a href="https://cucinaromana.ro">
              <img src={logoname} className="h-8 sm:h-12 w-auto" alt="Cucina Logo" />
            </a>

            
          </div>
        </nav>

    ) 
}

export default NavBar