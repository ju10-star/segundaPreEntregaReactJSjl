// Presentacional: recibe lista de productos y renderiza un listado de ItemCard 
import ItemCard from './ItemCard'

export default function ItemList({ items }) {
  return (
    <div className="grid">
      {items.map((prod) => (
        <ItemCard key={prod.id} item={prod} />
      ))}
    </div>
  )
}
