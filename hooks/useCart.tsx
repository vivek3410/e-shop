'use client'
import { CartProductType } from "@/types";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

type CartContextType = {
    cartProducts: CartProductType[] | null,
    handleAddProductToCart: (product: CartProductType) => void,
    handleRemoveProductFromCart: (product: CartProductType) => void,
    handleCartQtyInc: (product: CartProductType) => void,
    handleCartQtyDec: (product: CartProductType) => void,
    handleClearCart: () => void;

}


export const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null);

    useEffect(() => {
        const cartItems: any = localStorage.getItem('eShopCartItems')
        const cProducts: CartProductType[] = JSON.parse(cartItems)
        setCartProducts(cProducts)
    }, [])

    const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filteredProducts = cartProducts.filter((item) => item.id !== product.id)
            setCartProducts(filteredProducts);
            toast.success('Product removed from cart')
            localStorage.setItem('eShopCartItems', JSON.stringify(filteredProducts))
        }
    }, [cartProducts])

    const handleClearCart = useCallback(() => {
        if (cartProducts) {
            setCartProducts(null);
            localStorage.removeItem('eShopCartItems');
            toast.success('Cart cleared')
        }
    }, [cartProducts])

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
            return updatedCart;
        })
    }, [])


    const handleCartQtyInc = useCallback((product: CartProductType) => {
        let updatedCart;
        if (product.quantity === 99) {
            return toast.error('Maximum quantity reached');
        }

        if (cartProducts) {
            updatedCart = [...cartProducts];
            const existingProduct: number = cartProducts.findIndex((item) => item.id === product.id);
            if (existingProduct > -1) {
                updatedCart[existingProduct].quantity = ++updatedCart[existingProduct].quantity;
            }
            setCartProducts(updatedCart);
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
        }
    }, [cartProducts])

    const handleCartQtyDec = useCallback((product: CartProductType) => {
        let updatedCart;

        if (product.quantity < 1) {
            return toast.error('Minimum quantity reached');
        }
        if (cartProducts) {
            updatedCart = [...cartProducts];
            const existingProduct: number = cartProducts.findIndex((item) => item.id === product.id)
            if (existingProduct > -1) {
                updatedCart[existingProduct].quantity = --updatedCart[existingProduct].quantity;
            }
            setCartProducts(updatedCart);
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
        }


    }, [cartProducts])


    return (
        <CartContext.Provider value={{ cartProducts, handleAddProductToCart, handleRemoveProductFromCart, handleCartQtyInc, handleCartQtyDec, handleClearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) throw new Error('useCart must be used within a CartProvider')
    return context;
}