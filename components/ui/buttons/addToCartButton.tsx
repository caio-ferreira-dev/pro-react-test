import styles from "@/styles/components/ui/buttons/addToCartButton.module.css";
import axiosInstance from "../../../libs/axiosInstance";
import { useUser } from "../../../context/UserContext";
import { useRouter } from "next/router";
import AddedProductModal from "../modal/addedProductModal";
import { useState } from "react";

interface AddToCartButtonProps {
    productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
    const { user } = useUser()
    const router = useRouter()
    const [showAddMessage, setShowAddMessage] = useState<boolean>(false)

    async function handleAddToCart() {
        if(user.token !== null) {
            await axiosInstance.patch(`/carts/${1}`, {
                data: {
                    userId:3,
                    data: new Date,
                    products: [{productId, quantity: 1}]
                }
            })   
            setShowAddMessage(true)
            setTimeout(() => {
                setShowAddMessage(false);
            }, 3000);
        } else {
            router.push('/user/login')
        }
    }
    
    return (
        <button className={styles.addToCart} onClick={handleAddToCart}>
            <img className={styles.addIcon} src="/add_icon.png" alt="add icon" width={24} height={24}/>
            <img className={styles.cartIcon} src="/cart_white.png" alt="cart icon" width={32} height={32}/>
            <AddedProductModal show={showAddMessage} />
        </button>
    )
}