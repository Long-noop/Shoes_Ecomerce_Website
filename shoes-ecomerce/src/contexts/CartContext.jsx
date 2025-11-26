import React, { createContext, useContext, useState, useEffect } from "react";
import { cartService } from "../services/cartService";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();

    const [cartCount, setCartCount] = useState(0);
    const [total, setTotal] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    // const [stock, setStock]

    useEffect(() => {
        if (isAuthenticated) {
            loadCart();
        } else {
            setCartCount(0);
            setCartItems([]);
        }
    }, [isAuthenticated]);

    const loadCart = async () => {
        try {
            const response = await cartService.getCart();
            if (response.success) {
                setCartItems(response.data.items);
                const count = response.data.items.reduce((sum, item) => sum + item.quantity, 0);
                setCartCount(count);
                setTotal(response.data.total);
            }
        } catch (error) {
            console.error("Error loading cart:", error);
        }
    };

    // Add to Cart
    const addToCart = async (productId, quantity = 1) => {
        try {
            const response = await cartService.addToCart(productId, quantity);
            if (response.success) {
                await loadCart();
            }
            return response;
        } catch (error) {
            console.error("Add to cart error:", error);
            throw error;
        }
    };

    // Remove item
    const removeItem = async (itemId) => {
        try {
            const response = await cartService.removeItem(itemId);
            if (response.success) {
                await loadCart();
            }
            return response;
        } catch (error) {
            console.error("Remove cart item error:", error);
            throw error;
        }
    };

    const clearCart = async () => {
        try {
        const response = await cartService.clearCart();
        if (response.success) {
            setCartItems([]);
            setTotal(0);
            loadCart();
        }
        } catch (error) {
            console.error('Failed to clear cart',error);
            throw error;
        }
    };

    const updateQuantity = async (cartId, newQuantity) => {
        if (newQuantity < 1) return;

        try {
        const response = await cartService.updateQuantity(cartId, newQuantity);
            if (response.success) {
                await loadCart();
            }
        } catch (error) {
            console.error('Failed to update quantity', error);
            throw error;
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartCount,
                cartItems,
                total,
                loadCart,
                addToCart,
                removeItem,
                clearCart,
                updateQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
