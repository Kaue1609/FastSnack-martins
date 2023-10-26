import React from 'react'
import './style.css'
import kart from '../../assets/icons/carrinho.png'

function carrinho() {
  return (
    <div>
        <button><img className="kart-icon" src= {kart}></img></button>
    </div>
  )
}

export default carrinho;