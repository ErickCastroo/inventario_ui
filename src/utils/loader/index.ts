import { ObtenerProducto } from "@/service/obtenerProducot"

async function ProductosLoader (){
  const productos= await ObtenerProducto()
  console.log(productos)
}
export { ProductosLoader }