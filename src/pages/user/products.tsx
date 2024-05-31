import Head from "next/head";
import styles from "@/styles/pages/user/Products.module.css";
import Header from "../../components/Header";
import SearchBar from "../../components/ui/SearchBar";
import ProductsList from "../../components/ui/lists/ProductsList";
import NewProductButton from "../../components/ui/buttons/newProductButton";
import { useContext, useEffect } from "react";
import { DeviceWidthContext } from "../../context/DeviceWidthContext";
import { useUser } from "../../context/UserContext";
import { useRouter } from "next/router";

export default function ProductsPage() {
    // DeviceWidth Context
    const context = useContext(DeviceWidthContext)
    if (!context) {
      throw new Error('ExampleComponent must be used within a DeviceWidthProvider');
    }
    const { isMobile } = context

    // UserInfos context 
    const { user } = useUser()

    // PageRouter
    const router = useRouter()

    // Token check
    useEffect(() => {
        if(user.token === null) {
            router.push('/user/login')
        }
    }, [])


    return (
        <>
            <Head>
                <title>My Products</title>
                <meta name="description" content="A interface where users can manage their own products" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header issuer="user"/>
            <main className={styles.contentContainer}>
                <div className={styles.searchWrapper}>
                    {!isMobile && <SearchBar issuer="user"/>}
                    <NewProductButton />
                </div>
                <div className={styles.productsWrapper}>
                    <ProductsList issuer="user" />
                </div>
            </main>
        </>
    )
}