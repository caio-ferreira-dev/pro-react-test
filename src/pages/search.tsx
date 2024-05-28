import Head from "next/head";
import styles from "@/styles/pages/Search.module.css";
import Header from "../../components/Header";
import ProductsList from "../../components/ui/lists/ProductsList";
import CategoryList from "../../components/ui/lists/CategoryList";

const productsArray: Product[] = [
    {
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        rating: {
            rate: 3.9,
            count: 120
        },
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        category: "men's clothing"
    },
    {
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        rating: {
            rate: 4.1,
            count: 259
        },
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        category: "men's clothing"
    },
    {
        title: "Mens Cotton Jacket",
        price: 55.99,
        rating: {
            rate: 4.7,
            count: 500
        },
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        category: "men's clothing"
    },
    {
        title: "Mens Casual Slim Fit",
        price: 15.99,
        rating: {
            rate: 2.1,
            count: 430
        },
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        category: "men's clothing"
    },
    {
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        rating: {
            rate: 4.6,
            count: 400
        },
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery"
    },
    {
        title: "Solid Gold Petite Micropave",
        price: 168,
        rating: {
            rate: 3.9,
            count: 70
        },
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery"
    },
    {
        title: "White Gold Plated Princess",
        price: 9.99,
        rating: {
            rate: 3,
            count: 400
        },
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery"
    },
    {
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        rating: {
            rate: 1.9,
            count: 100
        },
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        category: "jewelery"
    },
    {
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: 64,
        rating: {
            rate: 3.3,
            count: 203
        },
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        category: "electronics"
    },
    {
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        rating: {
            rate: 2.9,
            count: 470
        },
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        category: "electronics"
    },
    {
        title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        rating: {
            rate: 4.8,
            count: 319
        },
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        category: "electronics"
    },
    {
        title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        rating: {
            rate: 4.8,
            count: 400
        },
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        category: "electronics"
    },
    {
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        rating: {
            rate: 2.9,
            count: 250
        },
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        category: "electronics"
    },
    {
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
        price: 999.99,
        rating: {
            rate: 2.2,
            count: 140
        },
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        category: "electronics"
    },
    {
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        rating: {
            rate: 2.6,
            count: 235
        },
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        category: "women's clothing"
    },
    {
        title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        rating: {
            rate: 2.9,
            count: 340
        },
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        category: "women's clothing"
    },
    {
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        rating: {
            rate: 3.8,
            count: 679
        },
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        category: "women's clothing"
    },
    {
        title: "MBJ Women's Solid Short Sleeve Boat Neck V",
        price: 9.85,
        rating: {
            rate: 4.7,
            count: 130
        },
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        category: "women's clothing"
    },
    {
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        rating: {
            rate: 4.5,
            count: 146
        },
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        category: "women's clothing"
    },
    {
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        rating: {
            rate: 3.6,
            count: 145
        },
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        category: "women's clothing"
    }
];


export default function SearchPage() {
    return (
        <>
            <Head>
                <title>Pro franchising test</title>
                <meta name="description" content="A software development test provided by Pro franchising" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.contentContainer}>
                <div className={styles.categoryWrapper}>
                    <CategoryList products={productsArray}/>
                </div>
                <div className={styles.listWrapper}>
                    <ProductsList products={productsArray}/>
                </div>
            </main>
        </>
    )
}