import Head from "next/head";
import styles from "@/styles/pages/user/Products.module.css";
import Header from "../../../components/Header";

export default function ProductsPage() {
    return (
        <>
            <Head>
                <title>My Products</title>
                <meta name="description" content="A interface where users can manage their own products" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={``}>
            
            </main>
        </>
    )
}