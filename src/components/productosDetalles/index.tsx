import { Product } from "@/types"

import { formatCurrency } from "@/helpers/currency"

type ProductosDetallesProps = {
  producto: Product
}

function ProductosDetalles(producto: ProductosDetallesProps) {
  return (
    <tr className="border-b border-gray-300 hover:bg-gray-100 transition">
      <td className="p-4 text-lg text-gray-900 text-center font-medium">
        {producto.producto.nombre}
      </td>
      <td className="p-4 text-lg text-gray-700 text-center">
        {formatCurrency(producto.producto.precio)}
      </td>
      <td className="p-4 text-lg text-gray-700 text-center">
        {producto.producto.cantidadDisponible}
      </td>
      <td className="p-4 text-lg font-semibold text-center">
        <button
          className={`px-3 py-1 rounded-full text-sm cursor-pointer
          ${producto.producto.cantidadDisponible > 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"}`}
        >
          {producto.producto.cantidadDisponible > 0 ? "Disponible" : "No disponible"}
        </button>
      </td>
    </tr>
  )
}

export { ProductosDetalles }