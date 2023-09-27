import React from 'react'
import CardTitle from './CardTitle'

function Card({children, bgColor, title}) {
  return (
    <>
      <div className={`${bgColor} shadow-md shadow-slate-700 rounded-lg p-4 m-10 inline-flex justify-center items-center flex-col gap-5 text-slate-950 max-w-md`}>{children}</div>
    </>
  )
}

Card.defaultProps = {
  bgColor: 'bg-slate-800',
  title: 'Card'
}

export default Card