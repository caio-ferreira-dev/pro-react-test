import Head from "next/head";
import styles from "@/styles/pages/user/Cart.module.css";
import Header from "../../../components/Header";

export default function CartPage() {
    return (
        <>
            <Head>
                <title>My Cart</title>
                <meta name="description" content="A interface where users can see and manage the products that they have inside their shopping cart" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.contentContainer}>
                <div className={styles.productsWrapper}>

                </div>
                <div className={styles.totalWrapper}>
                    <div className={styles.totalContainer}>
                        <h1>Total</h1>
                        <p className={styles.totalFont}></p>
                    </div>
                    <button className={styles.buyButton}>Finalizar compra</button>
                </div>
            </main>
        </>
    )
}