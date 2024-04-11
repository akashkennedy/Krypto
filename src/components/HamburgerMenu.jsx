import { useState } from 'react'
import Close from '../assets/close.png'

const HamburgerMenu = () => {
  const[menu, toggleMenu] = useState(true)

  return (
    <>
    {menu ?  <div className="absolute text-2xl  w-1/2 h-screen right-0 backdrop-blur-2xl sm:hidden">
      <nav className="mt-10 ml-5 flex gap-5">
        <ul className="flex flex-col gap-5">
            <li><a href="#">About</a></li>
            <hr />
            <li><a href="#">Pricing</a></li>
            <hr />
            <li><a href="#">Contact</a></li>
            <hr />
            <li><a href="#">Buy NFTs</a></li>
            <hr />
        </ul>
        <img src={Close} alt="Close Icon" className="h-10 ml-5 cursor-pointer" onClick={() => toggleMenu(false)}/>
        </nav>
    </div> : ''}
    </>
  )
}

export default HamburgerMenu