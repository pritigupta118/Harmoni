import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import { Product } from './types';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (category?: string) => {
    setLoading(true);
    setError(null);
    try {
      const url = category
        ? `https://fakestoreapi.com/products/category/${category}`
        : 'https://fakestoreapi.com/products';
      const response = await axios.get(url);
      if (response.data.length === 0) {
        setError(`No products found${category ? ` in ${category}` : ''}`);
      }
      setProducts(response.data);
      setCurrentCategory(category || null);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to load products. Please try again.');
      // If there's an error, we'll show all products
      if (category) {
        fetchProducts();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (category: string) => {
    fetchProducts(category);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const handleResetCategory = () => {
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        cartCount={cartCount} 
        onCategorySelect={handleCategorySelect}
        currentCategory={currentCategory}
        onResetCategory={handleResetCategory}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Store</h1>
          <h2 className="text-2xl mb-4">Your Shopping Destination</h2>
          <p className="text-gray-600">
            Discover a wide range of products tailored just for you. Shop with ease and find exactly what you need.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Discover Your Next Favorite Item</h2>
          <p className="text-gray-600 mb-8">
            Browse our exclusive collection and find the perfect product tailored just for you.
          </p>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-1 bg-orange-500 h-6 mr-4"></div>
              <h2 className="text-2xl font-bold">
                {currentCategory ? `${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}` : 'All Products'}
              </h2>
            </div>
            {currentCategory && (
              <button
                onClick={handleResetCategory}
                className="text-orange-500 hover:text-orange-600 font-medium"
              >
                ← Back to all products
              </button>
            )}
          </div>

          {error ? (
            <div className="flex flex-col items-center justify-center h-64">
              <p className="text-gray-600 text-lg mb-4">{error}</p>
              <button
                onClick={handleResetCategory}
                className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                View All Products
              </button>
            </div>
          ) : loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onProductClick={handleProductClick}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;