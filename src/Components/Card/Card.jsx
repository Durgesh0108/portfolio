import React from 'react'

const Card = (props) => {
  return (
    <div className={`rounded-xl ${props.className || " "}`}>
      {props.children}
    </div>
  )
}

export default Card
