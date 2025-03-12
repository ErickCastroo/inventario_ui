import axios from 'axios'
import { safeParse } from 'valibot'

import { draftProductSchema } from '@/types'

type productoData = {
  [k: string]: FormDataEntryValue
}

async function AgregarProducto(data: productoData) {
  try {
    const res = safeParse(draftProductSchema, {
      nombre: data.nombre,
      precio: Number(data.precio),
      cantidadDisponible: Number(data.cantidadDisponible)
    })
    if(res.success){
      const url = `${import.meta.env.VITE_URL_API}`
      const { data } = await axios.post(url, {
        nombre: res.output.nombre,
        precio: res.output.precio,
        cantidadDisponible: res.output.cantidadDisponible
      })
    }
    else{
      throw new Error('Error en la validación de los datos')
    }

    console.log(res)
  } catch (error) {
    console.error(error)

  }
}


export { AgregarProducto }