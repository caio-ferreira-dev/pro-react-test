import styles from "@/styles/components/ui/lists/productsList.module.css";
import Product from "../Product";

interface ProductsListProps {
    products: Product[]
    issuer: 'client' | 'user'
}

export default function ProductsList({ products, issuer }: ProductsListProps) {
    function renderProducts(productsArray: Product[]) {
        return productsArray.map((product, index) => {
            return <Product key={index} title={product.title} price={product.price} image={product.image} rating={product.rating} issuer={issuer}/>
        })
    }

    return (
        <div className={styles.listContainer}>
           {renderProducts(products)}
        </div>
    )
}
