import Head from "next/head";
import styles from "@/styles/pages/Search.module.css";
import Header from "../components/Header";
import ProductsList from "../components/ui/lists/ProductsList";
import CategoryList from "../components/ui/lists/CategoryList";

export default function SearchPage() {
    return (
        <>
            <Head>
                <title>Pro franchising test</title>
                <meta name="description" content="A software development test provided by Pro franchising" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header issuer="client"/>
            <main className={styles.contentContainer}>
                <div className={styles.categoryWrapper}>
                    <CategoryList />
                </div>
                <div className={styles.listWrapper}>
                    <ProductsList issuer="client"/>
                </div>
            </main>
        </>
    )
}