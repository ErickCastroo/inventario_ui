import { toast } from 'sonner'

async function action({ request }: { request: Request }) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  
  console.log(data)

  if (Object.values(data). includes('')) {
    toast.error('Todos los campos son requeridos')
    return { status: 400 }
  }
  else {
    toast.success('Producto creado correctamente')
  }
}

export { action };
