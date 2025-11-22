import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blog from './pages/Blogs/Blog'
import Contact from './pages/Contact/Contact'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MyAccount from './pages/MyAccount/MyAccount'
import Dashboard from "./pages/MyAccount/Dashboard";
import Profile from "./pages/MyAccount/Profile";
import Orders from "./pages/MyAccount/Orders";
import Wishlist from "./pages/MyAccount/Wishlist";
import Addresses from "./pages/MyAccount/Addresses";
import Security from "./pages/MyAccount/Security";
import ProductDetails from './pages/ProductDetails/ProductDetails'
import UserLayout from './layouts/UserLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard.jsx'
import AllProduct from './pages/Admin/AllProducts/AllProduct.jsx'
import OrderList from './pages/Admin/OrderList/OrderList.jsx'
import User from './pages/Admin/User/User.jsx'
import News from './pages/Admin/News/News.jsx'
import AdminContact from './pages/Admin/AdminContact/AdminContact.jsx'
import AdminProductDetails from './pages/Admin/AdminProductDetails/AdminProductDetails.jsx'
import AdminOrderDetails from './pages/Admin/AdminOrderDetails/AdminOrderDetails.jsx'
import AdminNewsDetails from './pages/Admin/AdminNewsDetails/AdminNewsDetails.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route element = {<UserLayout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='blogs' element={<Blog/>} />
          <Route path='products' element={<Products/>} />
          <Route path='cart' element={<Cart/>} />
          <Route path='checkout' element={<Checkout/>} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path='details' element={<ProductDetails/>} />

          <Route path='my-account' element={<MyAccount/>}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='products' element={<AllProduct />} />
          <Route path="products/add" element={<AdminProductDetails />} />
          <Route path="products/details/:id" element={<AdminProductDetails />} />
          <Route path='order-list' element={<OrderList />} />
          <Route path='order-list' element={<OrderList />} />
          <Route path='order-details/:id' element={<AdminOrderDetails />} />
          <Route path='user-management' element={<User />} />
          <Route path='contact' element={<AdminContact />} />
          <Route path='news' element={<News />} />
          <Route path='news-details' element={<AdminNewsDetails />} />
          <Route path='news-details/:id' element={<AdminNewsDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
