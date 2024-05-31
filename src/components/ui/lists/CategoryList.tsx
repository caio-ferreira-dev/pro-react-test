import styles from "@/styles/components/ui/lists/categoryList.module.css";
import { useSearchData } from "../../../hooks/useSearchData";
import { useRouter } from "next/router";

export default function CategoryList() {
    const { data } = useSearchData();
    const router = useRouter();
    const { title } = router.query;


    function renderCategoriesTwo() {
        return data?.categories.map((category, index) => {
            return <li className={styles.categoryItem} key={index} onClick={() => {handleFilter(category)}} style={{cursor: "pointer"}}>{category}</li>
        })
    }

    function handleFilter(category: string) {
        router.push(`/search?${title && `title=${title}`}&category=${category}`)
    }

    return(
        <>
            <h2 className={styles.categoryListTitle}>Categorias</h2>
            <ul className={styles.categoryContainer}>
                {renderCategoriesTwo()}
            </ul>
        </>
    )
}