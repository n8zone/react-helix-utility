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
      <NavLink
        to="/recipe-generator"
        end
        className="mx-2"
        >
        Recipe Generator
      </NavLink>
      <NavLink
        to="/learning-zone"
        end
        className="mx-2"
        >
        Learning Zone
      </NavLink>
    </div>
  )
}

export default Navbar