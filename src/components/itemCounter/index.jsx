import React, { useState } from 'react'
import './style.css'

function ContadorDeItens() {
    const [count, setCount] = useState(1);

    function adicionar() {
        setCount(count + 1);
    }

    const subtrair = () => {
        setCount(count - 1)
    }

  return (
    <div>
        <div className='count-item'>
            <button onClick={subtrair}>-</button>
            <p>{count}</p>
            <button onClick={adicionar}>+</button>
        </div>
        <button>Adiconar ao Cart</button>
    </div>
  )
}

export default ContadorDeItens;