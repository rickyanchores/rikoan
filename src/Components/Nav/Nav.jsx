import React from 'react'

const Nav = () => {
  return (
    <div className='Nav flex justify-between '>
        <div className="logo">ricky a</div>
        <div className="navList ">
            <ul className="navLinks flex justify-around items-center gap-5">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Nav;
