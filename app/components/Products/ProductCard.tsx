'use client'

import { priceFormat } from "@/utils/priceFormat"
import { truncateText } from "@/utils/truncateText"
import { Rating } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface ProductCardProps {
    data: any
}
export const ProductCard = ({ data }: ProductCardProps) => {
    const router = useRouter();
    const productRating = data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / data.reviews.length
    return (
        <div
            onClick={() => router.push(`/product/${data.id}`)}
            className="col-span-1 
            cursor-pointer 
            border-[1.25px]
            border-slate-200
            bg-slate-50 
            rounded-sm 
            transition 
            hover:scale-105 
            p-2 
            text-center 
            text-sm"
        >
            <div className="flex flex-col gap-1 items-center w-full ">
                <div className="w-full aspect-square overflow-hidden relative">
                    <Image src={data.images[0].image} alt={data.name} fill className="w-full h-full object-contain" />
                </div>
                <div className="mt-4">{truncateText(data.name)}</div>
                <div>
                    <Rating value={productRating} readOnly />
                </div>
                <div>{data.reviews.length} Reviews</div>
                <div className="font-semibold">{priceFormat(data.price)}</div>
            </div>
        </div>
    )
}