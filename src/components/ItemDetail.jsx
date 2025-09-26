// Presentacional: muestra detalle de un producto y permite agregar al carrito con ItemCount 
import ItemCount from './ItemCount'

export default function ItemDetail({ item }) {
  const { title, price, description, pictureUrl, stock } = item

  const handleAdd = (qty) => {
    alert(`Agregaste ${qty} unidad(es) de "${title}" al carrito.`)
    // Más adelante: integrar con contexto del carrito
  }

  return (
    <article className="detail">
      <img src={pictureUrl} alt={title} />
      <div className="detail__body">
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
        <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
      </div>
    </article>
  )
}
