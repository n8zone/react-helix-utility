import React from 'react'

function Card({children}) {
  return (
    <div className='bg-slate-200 shadow-md shadow-slate-700 rounded-lg p-4 m-10 inline-flex justify-center items-center flex-col gap-5 text-slate-950 max-w-md'>{children}</div>
  )
}

export default Card