import React from 'react'
import './style.css'
import Kart from '../../assets/icons/carrinho.png'

function carrinho() {
  return (
    <div>
        <button><img className="kart-icon" src={Kart} alt=''></img></button>
    </div>
  )
}

export default carrinho;