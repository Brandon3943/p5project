import React from 'react'

function CurrentDeck({ img }) {
  return (
    <div>
        <img src={img} style={{width: "52.5px", margin: "0px"}} alt="card" className="cards" />
    </div>
  )
}

export default CurrentDeck