import React from 'react'
import {HashLink as Link} from "react-router-hash-link";

const Nav = () => {

  const navList = [
    {
      name: "Home",
      href: "#"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Contacts",
      href: "#contacts"
    }
  ]

  return (
    <div className='Nav flex justify-between bg-red-400 p-5 top-0 z-20 sticky'>
        <div className="logo">ricky a</div>
        <div className="navList ">
            <ul className="navLinks flex justify-around items-center gap-5">
              {navList.map((link) => 
              <Link to={link.href}>{link.name}</Link>)}
            </ul>
        </div>
    </div>
  )
}

export default Nav;
