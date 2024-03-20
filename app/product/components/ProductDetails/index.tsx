'use client'
import { Rating } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { CartProductType, SelectedImgType } from '../../../../types';
import { Button, ProductImage, SetColor, SetQunatity } from '@/app/components';
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { MdCheckCircle } from 'react-icons/md';
interface ProductDetailsProps {
    product: any
}

const Horizontal = () => {
    return <hr className='w-[30%] my-2' />
}
export default function ProductDetails({ product }: ProductDetailsProps) {
    const router = useRouter()

    const { handleAddProductToCart, cartProducts } = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);

    useEffect(() => {
        if (cartProducts) {
            setIsProductInCart(cartProducts.find((item) => item.id === product.id) ? true : false)
        }
        console.log(cartProducts);
    }, [cartProducts])



    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1
    })
    const productRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length

    const handleColorSelect = useCallback((value: SelectedImgType) => {
        setCartProduct((prev) => (
            { ...prev, selectedImg: value }
        ))


    }, [cartProduct.selectedImg])

    const handleQuantity = useCallback((value: string) => {
        setCartProduct((prev) => (
            { ...prev, quantity: value === 'increment' ? prev.quantity === 10 ? 10 : prev.quantity + 1 : prev.quantity === 1 ? 1 : prev.quantity - 1 }
        ))
    }, [cartProduct.quantity])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <ProductImage product={product} cartProduct={cartProduct} handleColorSelect={handleColorSelect} />
            <div className='flex flex-col gap-1 text-slate-500'>
                <h2 className='text-3xl font-medium text-slate-700'>{product.name}</h2>
                <div className='flex items-center gap-2'>
                    <Rating value={productRating} readOnly />
                    <div>{product.reviews.length} Reviews</div>
                </div>
                <Horizontal />
                <div className='text-justify'>
                    {product.description}
                </div>
                <Horizontal />
                <div>
                    <span className='font-semibold'>Category: </span> {product.category}
                </div>
                <div>
                    <span className='font-semibold'>BRAND: </span> {product.brand}
                </div>
                <div className={`${product.inStock ? 'text-teal-400' : 'text-rose-400'}`}>{product.inStock ? 'In Stock' : 'Out of Stock'}</div>
                <Horizontal />
                {isProductInCart ? (
                    <>
                        <div className='mb-2 text-slate-500 flex items-center gap-1'>
                            <MdCheckCircle className='text-teal-400' size={20} />
                            <p>Product Added to Cart</p>
                        </div>
                        <Button label={'VIEW IN CART'} outline onClick={() => { router.push('/cart') }} custom='max-w-[300px]' />

                    </>
                ) : (
                    <>
                        <SetColor
                            images={product.images}
                            cartProduct={cartProduct}
                            handleColorSelect={handleColorSelect}
                        />
                        <Horizontal />
                        <SetQunatity cartProduct={cartProduct} handleQuantity={handleQuantity} />
                        <Horizontal />
                        <Button label={'ADD TO CART'} onClick={() => { handleAddProductToCart(cartProduct), toast.success("product added to cart") }} custom='max-w-[300px]' />
                    </>
                )}
            </div>
        </div>
    );
}
