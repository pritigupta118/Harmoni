# E-commerce Application with FakeStore API

A modern, responsive e-commerce application built with React, TypeScript, and Tailwind CSS, utilizing the FakeStore API for product data.

## Features

- 📱 Responsive design that works on mobile, tablet, and desktop
- 🔍 Category-based product filtering
- 🛒 Shopping cart functionality
- 🖼️ Product modal with detailed information
- ⚡ Fast and efficient API integration
- 🎨 Clean and modern UI design
- 🔄 Redux state management
- 🎯 Type-safe development with TypeScript

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

## State Management Architecture

The application uses Redux Toolkit for state management, organized into three main slices:

### Products Slice
- Manages product data and category filtering
- Handles async API calls using createAsyncThunk
- Tracks loading states and errors

### Cart Slice
- Manages shopping cart state
- Tracks cart items and total count
- Handles add to cart operations

### UI Slice
- Manages UI-related state
- Controls modal visibility
- Handles search term and selected product

## Design Decisions

1. **Redux Implementation**
   - Used Redux Toolkit for simplified Redux setup
   - Implemented type-safe actions and reducers
   - Separated concerns into logical slices
   - Created custom hooks for type-safe Redux usage

2. **Type Safety**
   - Comprehensive TypeScript integration
   - Type-safe Redux state and actions
   - Custom hooks for type-safe Redux usage

3. **Performance Optimizations**
   - Efficient state updates
   - Memoized selectors
   - Optimized re-renders

4. **Code Organization**
   - Feature-based folder structure
   - Separate slices for different concerns
   - Reusable custom hooks
   - Clean and maintainable component structure

## Technical Stack

- React 19
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Axios
- Vite

## Future Improvements

1. **State Management Enhancements**
   - Implement Redux persistence
   - Add middleware for analytics
   - Optimize state selectors

2. **Cart Features**
   - Add quantity management
   - Implement cart persistence
   - Add checkout flow

3. **Performance**
   - Implement Redux query caching
   - Add request debouncing
   - Optimize bundle size

4. **Testing**
   - Add Redux state tests
   - Implement action creators tests
   - Add selector tests

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.