import React from 'react'

function InputLabelPair({text, inputType, onChange}) {
  return (
    <div className='flex flex-col mb-2 mx-4'>
      <label className='text-white mb-2'>{text}</label>
      <input className='rounded-sm px-2' type={inputType} onChange={onChange} />
    </div>
  )
}

export default InputLabelPair