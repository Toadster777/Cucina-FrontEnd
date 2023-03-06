import React from "react";
import logoCucina from '../logoCucina.png'

function Footer() {



    return(
        
    <footer class="p-8 bg-oliveGreen  flex justify-center ">
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full contentContainer ">
             <span class="text-md text-black sm:text-center rmd:hidden font-Montserrat">© 2023 <a href="https://cucinaromana.ro" class="hover:underline font-Montserrat">Cucina Romana</a>. All Rights Reserved.
            </span>
        <img src={logoCucina} alt="Logo Cucina Romana" className="w-auto h-28 md:hidden mb-6"/>
        <ul class="flex flex-row items-center text-md text-black rlg:flex-col gap-4  rmd:mt-4">
            <li className="lg:mr-2">
                <div className="flex gap-8 rmd:mb-4">
                    <a href = "https://www.facebook.com/cucinaromana.ro/" target = "_blank" className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                      <svg fill="#000000" height="16px" width="16px" version="1.1" id="Layer_1"  
                        viewBox="0 0 310 310">
                        <g id="XMLID_834_">
                            <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
                                c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
                                V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
                                C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
                                c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"/>
                        </g>
                        </svg>  
                    </a>

                    <a href = "https://instagram.com/cucinaromana.ro?igshid=YmMyMTA2M2Y=" target = "_blank" className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                        <svg  width="16" height="16" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg> 
                    </a>
                

                
                </div>
            </li>
            <li>
                <a href="/contact" class=" hover:underline font-Montserrat">Contact</a>
            </li>
            <li>
                <a href="#" class=" hover:underline font-Montserrat">Politica de confidentialitate</a>
            </li>
            <li>
                <a href="#" class=" hover:underline font-Montserrat">Politica cookie</a>
            </li>
        </ul>
        </div>
       
    </footer>

    )
}

export default Footer