import Head from "next/head";
import styles from "@/styles/pages/user/Cart.module.css";
import Header from "../../../components/Header";
import CartProductsList from "../../../components/ui/lists/CartProductsList";
import { useCartData } from "../../../hooks/useCart";
import { useEffect, useState } from "react";
import { useUser } from "../../../context/UserContext";
import { useRouter } from "next/router";
import ConfirmBuyModal from "../../../components/ui/modal/confirmBuyModal";

export default function CartPage() {
    const { data } = useCartData();
    const { user } = useUser();
    const router = useRouter();
    const [showBuyMessage, setBuyMessage] = useState<boolean>(false)
 
    function calcTotal() {
        let total: number = 0
        data?.productsData.map((product) => {
            total += product.price
        })
        return total.toFixed(2)
    }

    useEffect(() => {
        if(user.token === null) {
            router.push('/user/login')
        }
    }, [])

    function handleBuyConfirm() {
        setBuyMessage(true)
        setTimeout(() => {
            setBuyMessage(false);
        }, 3000);
    }

    return (
        <>
            <Head>
                <title>My Cart</title>
                <meta name="description" content="A interface where users can see and manage the products that they have inside their shopping cart" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header issuer="client"/>
            <main className={styles.contentContainer}>
                <div className={styles.productsWrapper}>
                    <CartProductsList />
                </div>
                <div className={styles.totalWrapper}>
                    <div className={styles.totalContainer}>
                        <h1>Total</h1>
                        <p className={styles.totalFont}>$ {calcTotal()}</p>
                    </div>
                    <button className={styles.buyButton} onClick={handleBuyConfirm}>Finalizar compra</button>
                    <ConfirmBuyModal show={showBuyMessage} />
                </div>
            </main>
        </>
    )
}