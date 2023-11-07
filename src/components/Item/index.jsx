import './style.css'
import React, { useState } from 'react'
import Cookie from '../../assets/img/Cookie de Chocolate.webp'

function Item() {
    const [CookieDeChocolate, setCookie] = useState([
        { id: 1, name: 'Sabor: chocolate'},
        { id: 2, name: 'Preço: 34,00' },
        { id: 3, name: 'Uni: 25'},
        { id: 4, name: 'Peso: 500g'},
    ])
    
  return (
    <div>
        <div><img className="chocookie" src={Cookie} alt=''></img></div>
        <h1>Cookie de Chocolate</h1>
        <p>Contém 25 deliciosos Cookies em cada caixa </p>
        <ul> {CookieDeChocolate.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
        <button>-Descrição do produto-</button>
    </div>
  )
}

export default Item;