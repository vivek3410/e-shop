import { CartProductType, SelectedImgType } from "@/types"

interface SetColorProps {
    images: SelectedImgType[],
    cartProduct: CartProductType,
    handleColorSelect: (value: SelectedImgType) => void
}

export const SetColor = ({ images, cartProduct, handleColorSelect }: SetColorProps) => {
    return (
        <div className="flex gap-4">
            <span className="font-semibold">COLOR:</span>
            <div className="flex gap-1">
                {images.map((image, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleColorSelect(image)}
                            className={`
                                w-7
                                h-7 
                                rounded-full 
                                flex 
                                items-center 
                                justify-center
                                border-teal-300 
                                ${cartProduct.selectedImg.color === image.color ? "border-[1.25px]" : 'border-none'}`}
                        >
                            <div style={{ backgroundColor: image.colorCode }} className="w-5 h-5 rounded-full border-[1.25px] border-slate-300 cursor-pointer" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}