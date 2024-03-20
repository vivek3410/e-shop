export type CartProductType = {
    id: string,
    name: string,
    description: string,
    price: number,
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    quantity: number,
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string

}

