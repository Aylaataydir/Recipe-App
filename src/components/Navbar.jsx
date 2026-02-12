import React, { useState } from 'react'
import { GoX } from "react-icons/go";
import logo from "../assets/images/logo.svg"
import { NavLink } from 'react-router-dom';
import hamburger from "../assets/images/icon-hamburger-menu.svg"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex items-center justify-between relative mobile:mt-4 tablet: mt-4 border-b border-neutral-400/50 pb-4'>
            <div className='flex-1'>
                <img src={logo} alt="" />
            </div>
            <div className=' sm:block lg:hidden'>
                <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
                    <GoX
                        className={`text-4xl ${isOpen ? "block" : "hidden"} bg-neutral-300 text-neutral-900  rounded  `} />
                    <img
                        className={` ${isOpen ? "hidden" : "block"}  bg-neutral-300 p-3 rounded`} src={hamburger} alt="" />
                </div>

                <ul className={`${isOpen ? "block" : "hidden"} text-preset-7  absolute right-0.5 top-12 bg-white w-1/2 rounded`}>
                    <li className='navbar-link'><NavLink to="/">Home</NavLink></li>
                    <li className='navbar-link'><NavLink to="/about">About</NavLink></li>
                    <li className='navbar-link'><NavLink to="/recipes">Recipes</NavLink></li>
                    <li className='navbar-link w-full'><NavLink className='btn'>Add Recipe</NavLink></li>
                </ul>
            </div>

            <ul className=" flex-1 text-preset-7 items-center gap-9 text-center hidden  lg:flex ">
                <li ><NavLink className={({ isActive }) => isActive ? "border-b-2 border-orang-500" : ""} to="/">Home</NavLink></li>
                <li ><NavLink className={({ isActive }) => isActive ? "border-b-2 border-orang-500" : ""} to="/about">About</NavLink></li>
                <li ><NavLink className={({ isActive }) => isActive ? "border-b-2 border-orang-500" : ""} to="/recipes">Recipes</NavLink></li>
            </ul>
            <NavLink className=' hidden lg:block btn px-5 py-3 w-fit'>Add Recipe</NavLink>

        </div>



    )
}

export default Navbar