import { Container } from "@/app/components/Container";
import ProductDetails from "../components/ProductDetails";
import { products } from "@/utils/products";
import ListRating from "../components/ListRating";

interface ProductProps {
    params: {
        productId: string;
    }

}
const Product = ({ params }: ProductProps) => {
    const { productId } = params;

    const product = products.find((product: any) => product.id === productId);

    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product} />
                <div className="flex flex-col mt-20 gap-4">
                    <div>Add rating</div>
                    <ListRating product={product} />
                </div>
            </Container>
        </div>
    );
}

export default Product;