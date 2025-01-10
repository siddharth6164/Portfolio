import React from 'react'

function Projectcards({src,link,name,desc}) {
  return (
    <a href={link} target='_blank'>
        <img src={src} alt={`${name} logo`} />
        <h3>{name}</h3>
        <p>{desc}</p>
    </a>
  )
}

export default Projectcards