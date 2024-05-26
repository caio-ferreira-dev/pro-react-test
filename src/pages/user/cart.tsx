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
            <main className={``}>
            
            </main>
        </>
    )
}