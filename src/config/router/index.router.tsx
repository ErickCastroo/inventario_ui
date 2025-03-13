import { createBrowserRouter } from 'react-router'

import { action as nuevoProductoAction} from '@/utils/actions/productoNuevoAction'
import { ProductosLoader } from '@/pages/home/App'

import { Layout } from '@/components/layout'

import { Home } from '@/pages/home/App'
import { NuevoProducto } from '@/pages/nuevoProducto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: ProductosLoader
      },
      {
        path: 'productos/nuevo',
        element: <NuevoProducto />,
        action: nuevoProductoAction
      }
    ]
  },
])


export { router }
