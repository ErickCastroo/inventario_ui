// components/ProductoModalContent.tsx
import { Product } from "@/types";
import { formatCurrency } from "@/helpers/currency";
import { Form } from "react-router";


type ProductoModalContentProps = {
  producto: Product;
};

function EditarProductos({ producto }: ProductoModalContentProps) {
  return (
    <div className="space-y-4">
      <Form className='mt-10' method='PUT'>
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
    </div>
  );
}

export { EditarProductos }

