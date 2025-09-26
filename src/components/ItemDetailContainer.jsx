// Contenedor: obtiene un producto por ID y pasa datos al presentacional ItemDetail 
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/mockApi'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getProductById(id)
      .then((data) => {
        if (!data) throw new Error('Producto no encontrado')
        setItem(data)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando detalle...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>
  if (!item) return null

  return <ItemDetail item={item} />
}
