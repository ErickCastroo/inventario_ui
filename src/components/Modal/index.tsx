// components/Modal/Modal.tsx
import { ReactNode, useEffect } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  precio?: number;
  cantidadDisponible?: number;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, title, precio, cantidadDisponible, children }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) window.addEventListener('keydown', handleEsc);

    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed  inset-0 backdrop-brightness-50 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-2/3 h-3/4 relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Cerrar modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Encabezado */}
        {title && (
          <div className="border-b border-gray-200 pb-3 mb-4">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <div className="text-gray-500">
              {precio && `Precio: $${precio}`}
              {cantidadDisponible && ` | Disponibles: ${cantidadDisponible}`}
            </div>
          </div>
        )}

        {/* Contenido */}
        <div className="text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export { Modal }