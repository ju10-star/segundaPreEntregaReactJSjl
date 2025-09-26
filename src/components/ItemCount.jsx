// Presentacional: contador de unidades con botones +, - y "Agregar al carrito" 
import { useState } from 'react'

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial)

  const inc = () => setQty((q) => (q < stock ? q + 1 : q))
  const dec = () => setQty((q) => (q > 1 ? q - 1 : q))
  const add = () => onAdd?.(qty)

  return (
    <div className="count">
      <div className="count__controls">
        <button onClick={dec} disabled={qty <= 1}>-</button>
        <span>{qty}</span>
        <button onClick={inc} disabled={qty >= stock}>+</button>
      </div>
      <button className="btn primary" onClick={add} disabled={!stock}>
        Agregar al carrito
      </button>
      {!stock && <p className="state">Sin stock</p>}
    </div>
  )
}
