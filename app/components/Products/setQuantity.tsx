
import { CartProductType } from "@/types"


interface SetQuantityProps {
    cartProduct: CartProductType,
    handleQuantity: (value: string) => void
}
export const SetQunatity = ({ cartProduct, handleQuantity }: SetQuantityProps) => {


    return (
        <div className="flex items-center gap-4">
            <div className="font-semibold">QUANTITY:</div>
            <div className="flex items-center gap-4">
                <button className="w-5 h-5 rounded-sm border-[1px] border-slate-400 flex items-center justify-center" onClick={() => handleQuantity("decrement")} >-</button>
                <span>{cartProduct.quantity}</span>
                <button className="w-5 h-5 rounded-sm border-[1px] border-slate-400 flex items-center justify-center" onClick={() => handleQuantity("increment")}>+</button>
            </div>
        </div>
    )
}