import styles from "@/styles/components/ui/buttons/addToCartButton.module.css";

export default function AddToCartButton() {
    return (
        <button className={styles.addToCart}>
            <img src="add_icon.png" alt="add icon" width={24} height={24}/>
            <img src="cart_white.png" alt="cart icon" width={32} height={32}/>
        </button>
    )
}