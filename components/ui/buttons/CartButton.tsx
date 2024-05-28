import styles from "@/styles/components/ui/buttons/cartButton.module.css";

export default function CartButton() {
    return (
        <button>
            <img className={styles.cartButtonImage} src="/cart_white.png" alt="shopping-cart" width={40} height={40}/>
        </button>
    )
}
