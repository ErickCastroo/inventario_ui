import { toast } from 'sonner'

import { AgregarProducto } from '@/service/agregarProducto'

async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  
  if (Object.values(data). includes('')) {
    toast.error('Todos los campos son requeridos')
    return { status: 400 }
  }
  else {
    toast.success('Producto creado correctamente')
    await AgregarProducto(data)
    return { status: 200 }
  }
}

export { action };
