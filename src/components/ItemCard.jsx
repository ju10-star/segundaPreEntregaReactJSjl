// Presentacional: muestra un producto individual con bot�n para ver detalle 
import { Link } from 'react-router-dom'

export default function ItemCard({ item }) {
  const { id, title, price, pictureUrl } = item
  return (
    <article className="card">
      <img src={pictureUrl} alt={title} />
      <div className="card__body">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <Link to={`/item/${id}`} className="btn">Ver detalle</Link>
      </div>
    </article>
  )
}
