import styles from "@/styles/components/ui/product.module.css";
import AddToCartButton from "./buttons/addToCartButton";
import { useContext } from "react";
import { DeviceWidthContext } from "../../context/DeviceWidthContext";
import EditButton from "./buttons/editButton";
import DeleteButton from "./buttons/deleteButton";

interface ProductProps {
    title: string
    price: number
    rating: {
        rate: number,
        count: number
    }
    image: string
    issuer: 'client' | 'user'
}

export default function Product({title, price, rating, image, issuer}: ProductProps) {
    const context = useContext(DeviceWidthContext)

    if (!context) {
      throw new Error('ExampleComponent must be used within a DeviceWidthProvider');
    }

    const { isMobile } = context

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

    function renderEditDiv() {
        return (
            <div className={styles.modifyDiv}>
                <EditButton />
                <DeleteButton />
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
            { issuer === 'client' ? <AddToCartButton /> : renderEditDiv()}
        </div>
    )
}