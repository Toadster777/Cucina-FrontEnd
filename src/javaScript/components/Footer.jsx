import React from "react";
import logoCucina from '../logoCucina.png'

function Footer() {



    return(
        
    <footer class="p-4 bg-oliveGreen  flex justify-center ">
        <div className="flex flex-col items-center md:flex-row md:justify-between w-full container ">
             <span class="text-md text-black sm:text-center rxs:hidden">© 2023 <a href="https://cucinaromana.ro" class="hover:underline">Cucina Romana</a>. All Rights Reserved.
            </span>
        <img src={logoCucina} alt="Logo Cucina Romana" className="w-auto h-28 xs:hidden mb-6" />
        <ul class="flex flex-row items-center text-md text-black rxs:flex-col gap-4 ">
            <li>
                <a href="tel:0770 525 875" class=" hover:underline">Contact</a>
            </li>
            <li>
                <a href="#" class=" hover:underline">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class=" hover:underline">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">About</a>
            </li>
        </ul>
        </div>
       
    </footer>

    )
}

export default Footer