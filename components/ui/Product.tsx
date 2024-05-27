import styles from "@/styles/components/ui/product.module.css";
import Image from "next/image";

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

    function renderRate(starRating: number) {
        let starsArray = [1, 2, 3, 4, 5]
        return starsArray.map((star, index) => {
            return star <= starRating ? <img key={index} src="star_icon_full.png" alt="star rating icon" width={20} height={20}/> : star <= starRating + 0.5 ? <img key={index} src="star_icon_half.png" alt="star rating icon" width={20} height={20}/> : <img key={index} src="star_icon.png" alt="star rating icon" width={20} height={20}/>
        })
    }

    return (
        <div className={styles.productContainer}>
            <div className={styles.imageWrapper}>
                <Image className={styles.productImage} src={image} alt="product image" layout="fill" objectFit="contain"></Image>
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
            <button className={styles.addToCart}>
                <img src="add_icon.png" alt="add icon" width={24} height={24}/>
                <img src="cart_white.png" alt="cart icon" width={32} height={32}/>
            </button>
        </div>
    )
}