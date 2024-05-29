import styles from "@/styles/components/ui/buttons/cartButton.module.css";
import { useRouter } from "next/router";

export default function CartButton() {
    const router = useRouter();

    function handleRouting() {
        router.push('/user/cart')
    }

    return (
        <button onClick={handleRouting}>
            <img className={styles.cartButtonImage} src="/cart_white.png" alt="shopping-cart"/>
        </button>
    )
}
