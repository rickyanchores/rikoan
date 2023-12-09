import React from 'react'
import {HashLink as Link} from "react-router-hash-link";

const Nav = () => {

  const navList = [
    {
      name: "home.",
      href: "#"
    },
    {
      name: "projects.",
      href: "#projects"
    },
    {
      name: "contacts.",
      href: "#contacts"
    }
  ]

  return (
    <div className='Nav flex justify-between items-center p-5 top-0 z-20 sticky rounded-3xl'>
        <div className="logo p-2 border-orange-600 border-4">
          <h1 className='logoText text-orange-600 '>R</h1>
        </div>
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
