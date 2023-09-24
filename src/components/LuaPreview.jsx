import React from 'react'

function LuaPreview({children}) {
  return (
    <pre style={{ whiteSpace: "pre-wrap" }}className='text-lg font-extralight font-mono w-9/12 m-4 px-4 py-2 border-slate-200 border-solid border-2 bg-slate-600 text-slate-100'>{children}</pre>
  )
}

export default LuaPreview