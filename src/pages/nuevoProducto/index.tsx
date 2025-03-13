import { Link, Form } from 'react-router-dom'

function NuevoProducto() {
  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-black text-slate-500'>Registrar Producto</h2>

        <Link to='/' className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'>
          Volver a productos
        </Link>
      </div>

      <Form className='mt-10' method='POST'>
        <div className='mb-4'>
          <label className='text-gray-800' htmlFor='nombre'>Nombre Producto:</label>
          <input id='nombre' type='text' className='mt-2 block w-full p-3 bg-gray-50' placeholder='N.1 - One Piece' name='nombre' />
        </div>
        <div className='mb-4'>
          <label className='text-gray-800' htmlFor='precio'>Precio:</label>
          <input id='precio' type='number' className='mt-2 block w-full p-3 bg-gray-50' placeholder='139' name='precio' />
        </div>
        <div className='mb-4'>
          <label className='text-gray-800' htmlFor='cantidadDisponible'>Cantidad disponible:</label>
          <input id='cantidadDisponible' type='number' className='mt-2 block w-full p-3 bg-gray-50' placeholder='50' name='cantidadDisponible' />
        </div>
        <input type='submit' className='mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded' value='Registrar Manga' />
      </Form>
    </>
  )
}

export { NuevoProducto }
