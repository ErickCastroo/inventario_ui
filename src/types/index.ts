import { object, string, number, InferOutput, array} from 'valibot'

export const draftProductSchema = object({
  nombre: string(),
  precio: number(),
  cantidadDisponible: number()
})



export const productSchema = object({
  id: number(),
  nombre: string(),
  precio: number(),
  cantidadDisponible: number()
})

export const productsSchema = array(productSchema)
export type Product = InferOutput<typeof productSchema>