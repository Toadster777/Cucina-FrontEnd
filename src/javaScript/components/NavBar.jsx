import '../../css/Main.css'
import logoname from '../logoCucinaname.png'
function NavBar () {



    return(
        <nav className=" bg-oliveGreen h-20 flex flex-row justify-between items-center rxs:flex rxs:flex-row rxs:justify-between rxs:gap-2">
          <div className="rxs:flex rxs:flex-row rxs:justify-between ">
            <a href="https://cucinaromana.ro">
              <img src={logoname} className="h-10 rsm:h-6 w-auto" alt="Cucina Logo" />
            </a>
          </div>  
          <div>
            <ul className="flex flex-row gap-8  rsm:gap-2 NavMenutxtStyle  rmd:text-lg md:text-xl rmd:gap-4">
                <li><button className="menuButton mobileText"><a href="/MenuPipera">Meniu Pipera</a></button></li>
                <li>|</li>
                <li><button className="menuButton mobileText"><a href="/MenuGaraDeNord">Meniu Gara de Nord</a></button></li>
                <li>|</li>
                <li><button className="menuButton mobileText"><a href="/Contact">Contact</a></button></li>
              </ul>
          </div>
        </nav>
    ) 
}

export default NavBar