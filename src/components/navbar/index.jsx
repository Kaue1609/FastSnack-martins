import "./style.css"
import React from 'react'
import Carrinho from '../btn-kart'

function NavBar() {
  return (
    <div className='nav'>
        <h1 className='title'>Cookie'Store</h1>
        <div className='opcoes'>
          <button classname='info'>Produtos</button>
          <button classname='info'>Contato</button>
          <button classname='info'>Login</button>
          <Carrinho></Carrinho>
        </div>
    </div>
  )
}

export default NavBar;