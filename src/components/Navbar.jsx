import React from 'react'

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='bg-slate-800 text-white p-4'>
      <NavLink
        to="/"
        end
        className="mx-2"
        >
        Home
      </NavLink>
      <NavLink
        to="/item-generator"
        end
        className="mx-2"
        >
        Item Generator
      </NavLink>
      <NavLink
        to="/plugin-generator"
        end
        className="mx-2"
        >
        Plugin Generator
      </NavLink>
      {/* <NavbarLink destination={'/'} text='Home'/>
      <NavbarLink destination={'/item-generator'} text='Item Generator'/>
      <NavbarLink destination={'/plugin-generator'} text='Plugin Generator'/> */}
    </div>
  )
}

export default Navbar