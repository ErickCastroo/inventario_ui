export function formatCurrency(monto: number) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'MXN'
  }).format(monto)
}