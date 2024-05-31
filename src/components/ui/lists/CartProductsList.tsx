import styles from "@/styles/components/ui/lists/cartProductsList.module.css";
import { useCartData } from "../../../hooks/useCart";

export default function CartProductsList() {
    const { data } = useCartData();

    function renderProducts(productsArray: Product[]) {
        return productsArray.map((product, index) => {
            return <li key={index} className={styles.cartProductContainer} style={{marginBottom: `${index - 1 !== productsArray.length && '20px'}`}}>
                <div className={styles.productImageWrapper}>
                    <img className={styles.productImage} src={product.image} alt="product image" />
                </div>
                <p className={`${styles.productName} ${styles.productFont}`}>{product.title}</p>
                <div className={styles.productQuantity}>
                    <p className={styles.productFont}>1</p>
                </div>
                <p className={`${styles.productFont} ${styles.productPrice}`}>$ {product.price.toFixed(2)}</p>
            </li>
        }) 
    }

    return (
        <ul className={styles.cartListContainer}>
            {data?.productsData && renderProducts(data?.productsData)}
        </ul>
    )
}