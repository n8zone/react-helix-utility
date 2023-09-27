import React from 'react'

function Button({children, type, onClick}) {
  return (
    <button type={type} onClick={onClick} className='bg-orange-300 text-slate-100 px-4 py-2 rounded-lg hover:bg-orange-400 active:bg-orange-500 mx-4'>{children}</button>
  )
}

Button.defaultProps = {
  type: 'button',
}

export default Button