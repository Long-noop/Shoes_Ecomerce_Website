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
          {/* Thêm route admin sau này */}
          {/* <Route path="users" element={<AdminUsers />} /> */}
          {/* <Route path="products" element={<AdminProducts />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
