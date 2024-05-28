import styles from "@/styles/components/ui/lists/categoryList.module.css";

interface CategoryListProps {
    products: Product[]
}

export default function CategoryList({ products }: CategoryListProps) {
    
    function extractCategories(products: Product[]): string[] {
        const categories: string[] = [];
    
        products.forEach((product) => {
            if (!categories.includes(product.category)) {
                categories.push(product.category);
            }
        });
    
        return categories;
    }

    function renderCategories(productsArray: Product[]) {
        const categories = extractCategories(productsArray)
        return categories.map((category, index) => {
            return <li className={styles.categoryItem} key={index}>{category}</li>
        })
    }

    return(
        <>
            <h2 className={styles.categoryListTitle}>Categorias</h2>
            <ul className={styles.categoryContainer}>
                {renderCategories(products)}
            </ul>
        </>
    )
}