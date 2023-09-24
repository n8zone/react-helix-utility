import React from 'react'

function Button({children}) {
  return (
    <button className='bg-orange-300 text-slate-100 px-4 py-2 rounded-lg hover:bg-orange-400 active:bg-orange-500'>{children}</button>
  )
}

export default Button