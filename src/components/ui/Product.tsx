import styles from "@/styles/components/ui/product.module.css";
import AddToCartButton from "./buttons/addToCartButton";
import EditButton from "./buttons/editButton";
import DeleteButton from "./buttons/deleteButton";

interface ProductProps {
    product: Product
    issuer: 'client' | 'user'
}

export default function Product({product, issuer}: ProductProps) {
    const { id, title, price, rating, image } = product
    
    // Star ratings function
    function renderRate(starRating: number) {
        let starsArray = [1, 2, 3, 4, 5]
        return starsArray.map((star, index) => {
            return star <= starRating 
                ? <img key={index} className={styles.star} src="/star_icon_full.png" alt="star rating icon"/> 
                : star <= starRating + 0.5 
                    ? <img key={index} className={styles.star} src="/star_icon_half.png" alt="star rating icon"/>
                    : <img key={index} className={styles.star} src="/star_icon.png" alt="star rating icon"/>
        })
    }

    // Ratings div function
    function renderRatingDiv() {
        return (
            <div className={styles.ratingContainer}>
                <div className={styles.starsContainer}>
                    {renderRate(rating.rate)}
                </div>
                <p className={styles.count}>{rating.count}</p>
            </div>
        )
    }

    // Edit/Delete button render function
    function renderEditDiv() {
        return (
            <div className={styles.modifyDiv}>
                <EditButton productInfo={product}/>
                <DeleteButton productId={id} />
            </div>
        )
    }

    return (
        <div className={styles.productContainer}>
            <div className={styles.imageWrapper}>
                <img className={styles.productImage} src={image} alt="product image" />
            </div>
            <div className={styles.productInfos}>
                <h2>{title}</h2>
                <p className={styles.price}>$ {price.toFixed(2)}</p>
                { issuer === 'client' && renderRatingDiv() }
            </div>
            { issuer === 'client' ? <AddToCartButton productId={id} /> : renderEditDiv()}
        </div>
    )
}