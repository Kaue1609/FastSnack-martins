import React from 'react'
import ContadorDeItem from '../itemCounter'
import ItemList from '../ItemList'

function itemListContainer() {
  return (
    <div className='container'>
        <h2>Produtos</h2>
        <ItemList />
        <ContadorDeItem/>
    </div>
  )
}

export default itemListContainer;