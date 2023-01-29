import React, { useState, useEffect } from "react";
import '../../css/Main.css';
import logoCucina from '../logoCucina.png'

const Home = (props) => {
    const { menus, texts } = props
    const [day, setDay] = useState(2)
    const [menuSrc, setMenuSrc] = useState('')

    useEffect(() => {
        menus.map(menu => {
            if (day === 1 && menu.attributes.Weekday.toLowerCase() === 'luni')
                setMenuSrc('https://vast-dusk-40691.herokuapp.com' + menu.attributes.menuImg.data.attributes.url)

            if (day === 2 && menu.attributes.Weekday.toLowerCase() === 'marti')
                setMenuSrc('https://vast-dusk-40691.herokuapp.com' + menu.attributes.menuImg.data.attributes.url)

            if (day === 3 && menu.attributes.Weekday.toLowerCase() === 'miercuri')
                setMenuSrc('https://vast-dusk-40691.herokuapp.com' + menu.attributes.menuImg.data.attributes.url)

            if (day === 4 && menu.attributes.Weekday.toLowerCase() === 'joi')
                setMenuSrc('https://vast-dusk-40691.herokuapp.com' + menu.attributes.menuImg.data.attributes.url)

            if (day === 5 && menu.attributes.Weekday.toLowerCase() === 'vineri')
                setMenuSrc('https://vast-dusk-40691.herokuapp.com' + menu.attributes.menuImg.data.attributes.url)
        }
        )


    },)

    const handleClick = (buttonDay) => {
        setDay(buttonDay)
    }
    
    return (
        <div className="w-full">
        <div id="WeekdayPanel" className=" flex flex-row justify-center bg-navGrey w-auto h-12 mb-4">
                <div className="container flex flex-row justify-between w-full">
                    <button onClick={() => handleClick(1)}><h2 className={day === 1 ? 'text-oliveGreen' : null}>Luni</h2>
                    </button>
                    <button onClick={() => handleClick(2)}><h2 className={day === 2 ? 'text-oliveGreen' : null}>Marti</h2></button>
                    <button onClick={() => handleClick(3)}><h2 className={day === 3 ? 'text-oliveGreen' : null}>Miercuri</h2></button>
                    <button onClick={() => handleClick(4)}><h2 className={day === 4 ? 'text-oliveGreen' : null}>Joi</h2></button>
                    <button onClick={() => handleClick(5)}><h2 className={day === 5 ? 'text-oliveGreen' : null}>Vineri</h2></button>
                </div>

            </div>
        < div id="content" className="w-full h-full flex flex-col justify-center items-center">
            
            {
                !(day === 0 || day === 6) ?
                <div id="MenuSheet" className="flex justify-center">
                        <img src={menuSrc} alt="Menu" className="object-contain mb-8" />
                    </div>
                    :
                    (texts.length > 0) ? <div id="MsgSheet" className=" flex flex-col items-center md:text-3xl justify-center gap-4 ">
                        <h1 className="">{texts?.[0]?.attributes?.content}</h1>
                        <p className="text-center w-3/5">{texts?.[1]?.attributes?.content}</p>
                        <img src={logoCucina} alt="Logo Cucina" className="h-48 w-auto" />
                    </div> : null
            }
            <div className="flex justify-center">
                <button class="bg-black  text-white font-semibold hover:text-white py-1 px-4  border border-transparent hover:border-transparent rounded xs:hidden my-2 w-40 ">
                    <a href="tel:0770 525 875">Contact</a>
                </button>
            </div>


        </div>
    </div>
    )
}



export default Home