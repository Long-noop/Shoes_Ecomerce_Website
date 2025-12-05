# Shoes E-Commerce Website

A modern React-based e-commerce platform with separate user and admin interfaces. The user site is built with **Bootstrap CSS**, while the admin dashboard uses **Tabler CSS** for a professional management interface.

## 📋 Project Overview

This project is a full-featured shoes e-commerce application featuring:

- **User Site**: Product browsing, shopping cart, checkout, and order management (Bootstrap CSS)
- **Admin Dashboard**: Product management, order tracking, analytics, and user management (Tabler CSS)
- **Authentication**: Secure login and role-based access control
- **Responsive Design**: Mobile-friendly UI for both user and admin interfaces
- **RESTful API Integration**: Backend API communication for products, orders, users, and categories

## 🔧 Tech Stack

- **Frontend Framework**: React 18+
- **Routing**: React Router v6+
- **UI Framework (User)**: Bootstrap 5+
- **UI Framework (Admin)**: Tabler CSS
- **Styling**: SCSS/CSS
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Icons**: Tabler Icons

## 📦 Version Information

- **Node.js**: 16.x or higher
- **npm**: 8.x or higher
- **React**: 18.x
- **Bootstrap**: 5.x
- **Tabler CSS**: Latest

## 🚀 Installation Guide

### 1. Prerequisites

Ensure you have the following installed on your system:

```bash
# Check Node.js version
node --version

# Check npm version
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### 2. Clone/Setup Project

```bash
# Navigate to project directory
cd shoes-ecomerce

# Install all dependencies
npm install
```

### 3. Install Key Packages (If Not Included)

The project includes these essential packages in `package.json`:

```bash
# React and React Router
npm install react react-dom react-router-dom

# Bootstrap (User Site)
npm install bootstrap

# Tabler CSS (Admin Dashboard)
npm install @tabler/core

# Axios (API Requests)
npm install axios

# Tabler Icons
npm install @tabler/icons-react

# Build tools (Vite)
npm install --save-dev vite @vitejs/plugin-react

# SCSS/Sass support
npm install --save-dev sass
```

**Note**: These are typically already included. Run `npm install` once to install everything.

## 📁 Project Structure

```
shoes-ecomerce/
├── src/
│   ├── components/
│   │   ├── Admin/           # Admin-specific components
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   └── Footer/
│   │   ├── Footer/          # User site footer
│   │   ├── Header/          # User site header
│   │   ├── Navbar/          # User site navbar
│   │   └── News/
│   ├── pages/
│   │   ├── Admin/           # Admin pages
│   │   │   ├── AdminDashboard/
│   │   │   ├── AllProducts/
│   │   │   ├── OrderList/
│   │   │   ├── AdminProductDetails/
│   │   │   └── ...
│   │   ├── Home/
│   │   ├── Products/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── MyAccount/
│   │   └── ...
│   ├── contexts/
│   │   ├── AuthContext.jsx   # Authentication state
│   │   └── CartContext.jsx   # Shopping cart state
│   ├── services/
│   │   ├── api.js            # Base API configuration
│   │   ├── productService.js
│   │   ├── orderService.js
│   │   ├── authService.js
│   │   └── ...
│   ├── layouts/
│   │   ├── AdminLayout.jsx
│   │   └── UserLayout.jsx
│   ├── assets/               # Global styles
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## 🎯 Running the Project

### Development Mode

Start the development server with hot module reloading:

```bash
npm run dev
```

The application will be available at:

- **User Site**: `http://localhost:5173` (or as shown in terminal)
- **Admin Dashboard**: `http://localhost:5173/admin`

### Production Build

Create an optimized production build:

```bash
npm run build
```

Output will be generated in the `dist/` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 🔑 Key Features

### User Site

- Browse products by category
- Search and filter products
- Add products to cart
- Checkout and place orders
- View order history
- User profile management
- Wishlist functionality

### Admin Dashboard

- View sales analytics and statistics
- Manage products (add, edit, delete)
- View all orders and order details
- Update order status
- Manage users
- View contact messages
- Dashboard with key metrics

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting (if configured)
npm run lint
```

## 📡 API Integration

The project uses Axios for API calls. Base configuration is in `src/services/api.js`:

```javascript
// Example API call
import { productService } from "@/services/productService";

const getProducts = async () => {
  const response = await productService.getProducts();
  // Handle response
};
```

### Available Services

- `authService.js` - Authentication endpoints
- `productService.js` - Product management
- `orderService.js` - Order operations
- `cartService.js` - Cart operations
- `categoryService.js` - Category data
- `userService.js` - User profile management
- `contactService.js` - Contact messages
- `blogService.js` - Blog content

## 🔐 Authentication

User authentication is managed via `AuthContext.jsx`:

```javascript
import { useAuth } from "@/contexts/AuthContext";

const MyComponent = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  // Use auth context
};
```

## 🛒 Cart Management

Shopping cart state is managed via `CartContext.jsx`:

```javascript
import { useCart } from "@/contexts/CartContext";

const MyComponent = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();
  // Use cart context
};
```

## 📱 Responsive Design

Both user and admin interfaces are fully responsive:

- **Mobile**: < 576px
- **Tablet**: 576px - 992px
- **Desktop**: > 992px

Bootstrap's responsive grid system handles user site layout, while Tabler CSS provides responsive admin components.

## 🎨 Styling

### User Site

- **Framework**: Bootstrap 5
- **Colors**: Customizable via Bootstrap variables
- **Custom CSS**: `src/assets/user.css`
- **Component Styles**: SCSS files in respective folders

### Admin Site

- **Framework**: Tabler CSS
- **Colors**: Tabler color scheme (primary, secondary, success, danger, etc.)
- **Custom CSS**: `src/assets/admin.css`
- **Component Styles**: SCSS files in respective admin folders

## 🚨 Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
# Specify different port
npm run dev -- --port 3000
```

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf dist
npm run build
```

## 📝 Environment Variables

Create a `.env` file in the project root for environment-specific settings:

```
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Shoes E-Commerce
```

Update `src/services/api.js` to use environment variables:

```javascript
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";
```

## 🤝 Project Dependencies Summary

| Package             | Version | Purpose          |
| ------------------- | ------- | ---------------- |
| react               | 18.x    | Core framework   |
| react-dom           | 18.x    | DOM rendering    |
| react-router-dom    | 6.x     | Routing          |
| bootstrap           | 5.x     | User site UI     |
| @tabler/core        | Latest  | Admin UI         |
| axios               | Latest  | HTTP requests    |
| @tabler/icons-react | Latest  | Icon library     |
| sass                | Latest  | SCSS compilation |
| vite                | Latest  | Build tool       |

## 📚 Documentation & Resources

- [React Documentation](https://react.dev)
- [React Router Guide](https://reactrouter.com)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)
- [Tabler CSS Docs](https://tabler.io)
- [Axios Documentation](https://axios-http.com)
- [Vite Documentation](https://vitejs.dev)

## 🔄 Workflow

1. **Development**: Run `npm run dev` and make changes
2. **Testing**: Test locally at `http://localhost:5173`
3. **Building**: Run `npm run build` when ready for production
4. **Deployment**: Deploy the `dist/` folder to your hosting

## 📞 Support

For issues or questions:

1. Check existing GitHub issues
2. Review the documentation links above
3. Check component-specific SCSS files for styling customization
4. Verify API endpoints in service files match your backend

## 📄 License

This project is provided as-is for educational and commercial use.

---

**Last Updated**: December 2024

**Happy Coding!** 🚀
