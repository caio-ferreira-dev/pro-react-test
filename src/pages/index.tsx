import Head from "next/head";
import styles from "@/styles/pages/Home.module.css";
import Header from "../../components/Header";
import Product from "../../components/ui/Product";

export default function Home() {
  return (
    <>
      <Head>
        <title>PDV - Pro franchising</title>
        <meta name="description" content="A software development test provided by Pro franchising" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.contentContainer}>
        <Product 
          title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          price={109.95}
          rating={{
            rate: 3.9,
            count: 120
          }}
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          />
      </main>
    </>
  );
}
