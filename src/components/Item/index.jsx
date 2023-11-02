import React, { useState } from 'react'

function Item() {
    const [CookieDeChocolate, setCookie] = useState([
        { id: 1, name: 'Sabor: chocolate'},
        { id: 2, name: 'Preço: 34,00' },
        { id: 3, name: 'Uni: 25'},
        { id: 4, name: 'Peso: 500g'},
    ])

  return (
    <div>
        <h1>Cookie de Chocolate</h1>
        <h3>-Descrição do produto-</h3>
        <ul> {CookieDeChocolate.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
    </div>
  )
}

export default Item;