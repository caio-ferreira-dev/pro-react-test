import styles from "@/styles/components/ui/lists/productsList.module.css";
import Product from "../Product";
import { useSearchData } from "../../../hooks/useSearchData";
import { useRouter } from "next/router";

interface ProductsListProps {
    issuer: 'client' | 'user'
}

export default function ProductsList({ issuer }: ProductsListProps) {
    const { data } = useSearchData();
    const router = useRouter();
    const { title, category } = router.query;

    function filterByTitle(productsArray: Product[]) {
        if(title === undefined) {
            return productsArray
        } else {
            const filteredProducts = productsArray.filter(product => product.title.toLowerCase().includes(`${title}`.toLowerCase()))
            return filteredProducts  
        }        
    }

    function filterByCategory(productsArray: Product[]) {
        if(category === undefined) {
            return productsArray
        } else {
            const filteredProducts = productsArray.filter(product => product.category.toLowerCase() === `${category}`.toLowerCase())
            return filteredProducts
        }        
    }

    function renderProducts(productsArray: Product[]) {
        const filteredArray = filterByCategory(filterByTitle(productsArray))
        return filteredArray.map((product, index) => {
            return <Product key={index} product={product} issuer={issuer} />
        })
    }

    return (
        <div className={styles.listContainer}>
           {data?.productsData && renderProducts(data?.productsData)}
        </div>
    )
}
