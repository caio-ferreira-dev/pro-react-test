import styles from "@/styles/components/ui/lists/cartProductsList.module.css";
import QuantityButton from "../buttons/quantityButton";
import DeleteButton from "../buttons/deleteButton";

interface CartProductsListProps {
    products: Product[]
}

export default function CartProductsList({ products }: CartProductsListProps) {

    function renderProducts(productsArray: Product[]) {
        return productsArray.map((product, index) => {
            return <li key={index} className={styles.cartProductContainer} style={{marginBottom: `${index - 1 !== productsArray.length && '20px'}`}}>
                <div className={styles.productImageWrapper}>
                    <img className={styles.productImage} src={product.image} alt="product image" />
                </div>
                <p className={`${styles.productName} ${styles.productFont}`}>{product.title}</p>
                <div className={styles.productQuantity}>
                    <QuantityButton functionality="decrease" />
                    <p className={styles.productFont}>1</p>
                    <QuantityButton functionality="increase" />
                </div>
                <p className={`${styles.productFont} ${styles.productPrice}`}>$ {product.price.toFixed(2)}</p>
                <DeleteButton />
            </li>
        }) 
    }

    return (
        <ul className={styles.cartListContainer}>
            {renderProducts(products)}
        </ul>
    )
}