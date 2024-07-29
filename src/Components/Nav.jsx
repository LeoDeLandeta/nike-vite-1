import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";



import HeaderLogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'




export const Nav = () => {
  let[isOpen, setisOpen]= useState(false);
  return (
    <header className='padding-x px-10 py-8 z-50 w-full bg-white fixed'>
      <nav className='flex justify-between items-center max-container w-fullh-6 z-50'>
        <a href="/">
        <img src={HeaderLogo} alt="logo" 
        width={130}
        height={29}/></a>

        <div onClick={()=> setisOpen(!isOpen)} className="w-7 h-7 absolute right-8 top-6 cursor-pointer
            md:hidden">
                {
                    isOpen ?  < IoIosClose className=" w-10 h-10"/> :  < GiHamburgerMenu  className=" w-10 h-10"/>
                }

            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-20 gap-16 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 mt-10 md:mt-0  transition-all duration-500 ease-in ${isOpen ? 'top-20' : 'top-[-200px]'}`}>
                <li className="rounded-lg h-[25px] w-[70px] flex justify-center cursor-pointer transition-all duration-700
                hover:bg-red-500 hover:scale-125">
                  <a href="#home">Home</a>
                </li>
                <li className="rounded-lg h-[25px] w-[70px] flex justify-center cursor-pointer transition-all duration-700
                hover:bg-red-500 hover:scale-125">
                  <a href="#about">About</a>
                </li>
                <li className="rounded-lg h-[25px] w-[70px] flex justify-center cursor-pointer transition-all duration-700
                hover:bg-red-500 hover:scale-125">
                  <a href="#products">Products</a>
                </li>
                <li className="rounded-lg h-[25px] w-[85px] flex justify-center cursor-pointer transition-all duration-700
                hover:bg-red-500 hover:scale-125">
                  <a href="#contact">Contact Us</a>
                </li>

                
            </ul>
       
      </nav>
    </header>
  )
}


