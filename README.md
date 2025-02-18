# E-commerce Application with FakeStore API

A modern, responsive e-commerce application built with React, TypeScript, and Tailwind CSS, utilizing the FakeStore API for product data.

## Features

- 📱 Responsive design that works on mobile, tablet, and desktop
- 🔍 Category-based product filtering
- 🛒 Shopping cart functionality
- 🖼️ Product modal with detailed information
- ⚡ Fast and efficient API integration
- 🎨 Clean and modern UI design

## Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
\`\`\`

2. Navigate to the project directory:
\`\`\`bash
cd ecommerce-app
\`\`\`

3. Install dependencies:
\`\`\`bash
npm install
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The application will be available at \`http://localhost:5173\`

## Functionality Checklist

✅ **Product Loading**
- Loads all products by default on initial page load
- Displays loading spinner while fetching data
- Handles API errors gracefully

✅ **Category Search**
- Real-time category filtering
- Shows "No categories found" message for non-existent categories
- Easy reset to all products
- Maintains clean state between category switches

✅ **Product Modal**
- Displays detailed product information
- High-quality product images
- Shows price, description, and ratings
- Smooth open/close transitions

✅ **Shopping Cart**
- Increments count when adding products
- Persistent cart count across category changes
- Visual feedback when adding items

✅ **State Management**
- Clean implementation using React hooks
- Separate concerns in different components
- Efficient data flow between components

## Technical Details

- Built with React 18 and TypeScript
- Styled using Tailwind CSS
- Uses Axios for API calls
- Implements modern React patterns and hooks
- Follows accessibility best practices

## Future Improvements

Given more time, these areas could be enhanced:

1. **Cart Persistence**
   - Implement local storage for cart items
   - Add a full cart page with item management

2. **Search Functionality**
   - Add product name search
   - Implement advanced filtering options

3. **Performance Optimization**
   - Implement infinite scrolling for products
   - Add image lazy loading
   - Implement caching for API responses

4. **User Experience**
   - Add product sorting options
   - Implement wishlist functionality
   - Add product reviews section

5. **Testing**
   - Add unit tests for components
   - Implement integration tests
   - Add end-to-end testing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.