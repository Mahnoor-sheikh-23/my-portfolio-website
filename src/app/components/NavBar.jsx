"use client";
import React, { useState } from 'react'
import Link from 'next/link';
import NavaLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "#about",
        id:"#about"
    },
    {
        title: "Projects",
        path: "#projects",
        id:"#projects"
    },
    {
        title: "Contact",
        path: "#contact",
        id : "#contact"
    },
]

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href="/" className=" text-2xl md:text-5xl text-white font-semibold">
                    <img src='https://logos.textgiraffe.com/logos/logo-name/39166620-designstyle-badge-m.png'
                        width={90} height={10} alt='logo' />
                </Link>
                <div className=' mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={()=> setNavbarOpen(true)} className=' flex  items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white'>
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        ) : (
                            <button onClick={()=> setNavbarOpen(false)} className=' flex  items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white'>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        )
                    }

                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-10 mt-0  mr-9'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavaLink href={link.id} title={link.title} id={link.id} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {
               navbarOpen ? <MenuOverlay links={navLinks}/> : null
            }
        </nav>
    )
}

export default NavBar;
