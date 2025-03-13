import { Product } from "@/types"
import { formatCurrency } from "@/helpers/currency"
import { useState } from "react"
import { Modal } from "@/components/Modal"
import { EditarProductos } from '@/components/EditarProductos'

type ProductosDetallesProps = {
  producto: Product
}

function ProductosDetalles({ producto }: ProductosDetallesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <tr className="border-b border-gray-300 hover:bg-gray-100 transition">
        <td className="p-4 text-lg text-gray-900 text-center font-medium">
          {producto.nombre}
        </td>
        <td className="p-4 text-lg text-gray-700 text-center">
          {formatCurrency(producto.precio)}
        </td>
        <td className="p-4 text-lg text-gray-700 text-center">
          {producto.cantidadDisponible}
        </td>
        <td className="p-4 text-lg font-semibold text-center space-x-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
          >
            Ver detalles
          </button>
        </td>
      </tr>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Detalles de ${producto.nombre}`}
        precio={producto.precio}
        cantidadDisponible={producto.cantidadDisponible}
      >
        <EditarProductos producto={producto} />
      </Modal>
    </>
  )
}

export { ProductosDetalles }