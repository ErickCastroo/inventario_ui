import { Link, useLoaderData } from 'react-router'

import { ObtenerProducto } from '@/service/obtenerProducto'

import { ProductosDetalles } from '@/components/productosDetalles'

import { Product } from '@/types'

async function ProductosLoader() {
  const productos = await ObtenerProducto()
  return productos
}
export { ProductosLoader }


const Home = () => {
  const productos = useLoaderData() as Product[]
  console.log(productos)

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-4xl font-black text-slate-500'>Agregar Manga</h2>

        <Link to='/productos/nuevo' className='rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'>
          Agregar Producto
        </Link>
      </div>

      <div className='p-2'>
        <table className='w-full mt-5 table-auto'>
          <thead className='bg-slate-800 text-white'>
            <tr>
              <th className='p-2'>Producto</th>
              <th className='p-2'>Precio</th>
              <th className='p-2'>Disponibilidad</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              productos.map((producto) => (
                <ProductosDetalles
                  key={producto.id}
                  producto={producto} />
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export { Home }