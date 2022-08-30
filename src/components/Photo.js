import React from 'react'
import myPhoto from '../images/me.png'

const Photo = () => {
  return (
    <div className='photo'>
        <img
        src={myPhoto}
        alt="Sahil's pfp" />
        <h1>Sahil Malik</h1>
        <h3>Web Developer</h3>
        <p>sahildev.website</p>
    </div>
  )
}

export default Photo