import Image from "next/image"

export const HomeBanner = () => {
    return (
        <div className="bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
            <div className="flex flex-col md:flex-row px-8 py-12 gap-2 items-center justify-evenly mx-auto">
                <div className="mb-8 md:m-0 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Summer Sale</h1>
                    <p className="text-lg md:text-xl text-white mb-2">Enjoy discounts on selected items</p>
                    <p className="text-2xl md:text-5xl text-yellow-400 font-bold">Get 50% OFF</p>
                </div>
                <div className="w-1/3 relative aspect-video">
                    <Image src={"/banner-image.png"} fill alt="banner" className="object-contain" />
                </div>
            </div>
        </div>
    )
}