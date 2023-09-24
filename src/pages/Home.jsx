import React from 'react'
import Card from '../shared/Card'
import Button from '../shared/Button'

function Home() {
  return (
    <div className='text-white  m-auto h-full flex justify-center items-center flex-col gap-5 bg-slate-400 text-2xl'>
      <div id="hero" className='flex justify-center items-center flex-col gap-5 h-96 bg-slate-950 m-0 p-0 w-full'>
        <h1 className='text-center text-8xl font-bold'>Helix Web Utility</h1>
        <p>Empowering server owners and developers to build their dream.</p>
        <p>Helix Web Utility is currently in development and is not ready for use.</p>
      </div>
      <div id="features">
        <Card>
          <h1>Item Generator</h1>
          <p className='text-base'>Easily create items in seconds, fully customizable to fit your needs</p>
          <Button>Begin</Button>
        </Card>
        <Card>
          <h1>Item Generator</h1>
          <p className='text-base'>Generate all the files you need to begin development in seconds with one easy UI</p>
          <Button>Begin</Button>
        </Card>
      </div>
    </div>
  )
}

export default Home