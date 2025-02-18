
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onProductClick(product)}
    >
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm text-gray-600">{product.rating.rate}</span>
            <span className="ml-1 text-sm text-gray-400">({product.rating.count})</span>
          </div>
        </div>
        <button 
          className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}