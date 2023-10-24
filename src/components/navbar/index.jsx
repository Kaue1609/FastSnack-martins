import "./style.css"
import React from 'react'

function NavBar() {
  return (
    <div className='nav'>
        <h1 className='title'>FastSnack</h1>
        <div className='opcoes'>
          <button classname='info'>Produtos</button>
          <button classname='info'>Contato</button>
          <button classname='info'>Login</button>
          <button classname='info'>Carrinho</button>
        </div>
    </div>
  )
}

export default NavBar;