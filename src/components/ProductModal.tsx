
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: () => void;
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-xl shadow-lg">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="aspect-square relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <Dialog.Title className="text-2xl font-bold text-gray-900">
                  {product.title}
                </Dialog.Title>

                <div className="mt-4 flex items-center">
                  <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                  <div className="ml-4 flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm text-gray-600">{product.rating.rate}</span>
                    <span className="ml-1 text-sm text-gray-400">({product.rating.count} reviews)</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600">{product.description}</p>

                <button
                  onClick={() => {
                    onAddToCart();
                    onClose();
                  }}
                  className="mt-8 w-full bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}