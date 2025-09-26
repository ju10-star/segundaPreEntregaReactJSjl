// Contenedor: maneja estado, obtiene productos (fetch/mock) y pasa datos al presentacional ItemList 
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../services/mockApi'
import ItemList from './ItemList'

export default function ItemListContainer() {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProducts(categoryId)
      .then((data) => setItems(data))
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) return <p>Cargando...</p>

  return (
    <section>
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Catálogo'}</h2>
      <ItemList items={items} />
    </section>
  )
}
