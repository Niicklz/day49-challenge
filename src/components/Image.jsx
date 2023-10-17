import React from 'react'
import "./Image.css"

export const Image = () => {
    const url = `https://source.unsplash.com/random/300x300?q=${Math.random()}`
  return (
    <div>
        <img src={url}   loading='lazy'/>
    </div>
  )
}
