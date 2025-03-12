import { object, string, number } from 'valibot'

export const draftProductSchema = object({
  nombre: string(),
  precio: number(),
  cantidadDisponible: number()
})

