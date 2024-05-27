import styles from "@/styles/components/ui/product.module.css";
import Image from "next/image";
import AddToCartButton from "./buttons/addToCartButton";
import { useContext } from "react";
import { DeviceWidthContext } from "../../context/DeviceWidthContext";

interface ProductProps {
    title: string
    price: number
    rating: {
        rate: number,
        count: number
    }
    image: string
}

export default function Product({title, price, rating, image}: ProductProps) {
    const context = useContext(DeviceWidthContext)

    if (!context) {
      throw new Error('ExampleComponent must be used within a DeviceWidthProvider');
    }

    const { isMobile } = context

    function renderRate(starRating: number) {
        let starsArray = [1, 2, 3, 4, 5]
        return starsArray.map((star, index) => {
            return star <= starRating ? <img key={index} src="star_icon_full.png" alt="star rating icon" width={20} height={20}/> : star <= starRating + 0.5 ? <img key={index} src="star_icon_half.png" alt="star rating icon" width={20} height={20}/> : <img key={index} src="star_icon.png" alt="star rating icon" width={20} height={20}/>
        })
    }

    function renderDesktop() {
        return (
            <>
                <div className={styles.imageWrapper}>
                    <img className={styles.productImage} src={image} alt="product image" />
                </div>
                <div className={styles.productInfos}>
                    <h2>{title}</h2>
                    <p className={styles.price}>$ {price.toFixed(2)}</p>
                    <div className={styles.rating}>
                        <div className={styles.stars}>
                            {renderRate(rating.rate)}
                        </div>
                        <p className={styles.count}>{rating.count}</p>
                    </div>
                </div>
                <AddToCartButton />
            </>
        )
    }

    function renderMobile() {
        return (
            <>
            
            </>
        )
    }

    return (
        <div className={styles.productContainer}>
            {isMobile ? renderMobile() : renderDesktop()}
        </div>
    )
}