import axios from 'axios'
import { safeParse } from 'valibot'
import { productsSchema } from '@/types'

async function ObtenerProducto() {
  try {
    const url = import.meta.env.VITE_URL_API
    if (!url) throw new Error('La URL de la API no está definida')

    const { data } = await axios.get(url)

    // Verificar si la API devuelve datos como array o un objeto
    const responseData = Array.isArray(data) ? data : data.data

    // Convertir precio de string a número si es necesario
    const normalizedData = responseData.map((producto: { precio: string }) => ({
      ...producto,
      precio: parseFloat(producto.precio), // Convertir precio a número
    }))

    const res = safeParse(productsSchema, normalizedData)

    if (res.success) {
      return res.output
    } else {
      console.error('Error en la validación de los datos:')
      throw new Error('Error en la validación de los datos')
    }
  } catch (error) {
    console.error('Error al obtener productos:')
    throw error
  }
}

export { ObtenerProducto }
