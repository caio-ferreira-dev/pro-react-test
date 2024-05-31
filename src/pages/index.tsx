import Head from "next/head";
import styles from "@/styles/pages/Home.module.css";
import Header from "../components/Header";
import ProductsList from "../components/ui/lists/ProductsList";

export default function Home() {
  return (
    <>
      <Head>
        <title>PDV - Pro franchising</title>
        <meta name="description" content="A software development test provided by Pro franchising" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header issuer="client"/>
      <main className={styles.contentContainer}>
        <ProductsList issuer="client" />
      </main>
    </>
  );
}
