import { createBrowserRouter } from 'react-router'

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
        element: <Home />
      },
      {
        path: 'productos/nuevo',
        element: <NuevoProducto />
      }
    ]
  },
])


export { router }
