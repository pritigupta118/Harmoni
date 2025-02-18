import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Search } from 'lucide-react';
import axios from 'axios';

interface HeaderProps {
  cartCount: number;
  onCategorySelect: (category: string) => void;
  currentCategory: string | null;
  onResetCategory: () => void;
}

export default function Header({ cartCount, onCategorySelect, onResetCategory }: HeaderProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="bg-yellow-400 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 
              onClick={onResetCategory}
              className="text-xl font-bold cursor-pointer hover:text-gray-700 transition-colors"
            >
              Harmoni
            </h1>
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="text-black hover:text-gray-700">Home Page</a>
              <a href="#" className="text-black hover:text-gray-700">Categories</a>
              <a href="#" className="text-black hover:text-gray-700">Contact Us</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative" ref={searchRef}>
              <div className="flex items-center bg-white rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="outline-none w-64"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                />
                <Search className="h-5 w-5 text-gray-400" />
              </div>

              {isSearchOpen && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg py-2">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                      <button
                        key={category}
                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          onCategorySelect(category);
                          setIsSearchOpen(false);
                          setSearchTerm('');
                        }}
                      >
                        {category}
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">
                      No categories found
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}