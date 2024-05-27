import styles from "@/styles/components/ui/buttons/addToCartButton.module.css";

export default function AddToCartButton() {
    return (
        <button className={styles.addToCart}>
            <img className={styles.addIcon} src="add_icon.png" alt="add icon" width={24} height={24}/>
            <img className={styles.cartIcon} src="cart_white.png" alt="cart icon" width={32} height={32}/>
        </button>
    )
}