import React from 'react'
import { Image } from './components/Image'

export const App = () => {

  return (
    <div className='container'>
        <h1>Random Image Feed</h1>
        <div className="image-container">
        {Array.from({length: 18}).map(_ => (
            <Image/>
        ))}
        </div>
        
    </div>
  )
}
