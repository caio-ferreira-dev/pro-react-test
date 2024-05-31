import styles from "@/styles/components/ui/buttons/deleteButton.module.css"
import axiosInstance from "../../../libs/axiosInstance"
import { useState } from "react"
import DeletedProductMessage from "../modal/deletedProductMessage"

interface DeleteButtonProps {
    productId: number
}

export default function DeleteButton({ productId }: DeleteButtonProps) {
    const [showDeleteMessage, setShowDeleteMessage] = useState(false)

    async function handleDeleteProduct() {
        await axiosInstance.delete(`products/${productId}`)
        setShowDeleteMessage(true)
        setTimeout(() => {
            setShowDeleteMessage(false)
        }, 3000)
    }

    return (
        <button onClick={handleDeleteProduct}>
            <img className={styles.deleteIconImg} src="/delete_icon.png" alt="delete x icon" />
            <DeletedProductMessage show={showDeleteMessage} />
        </button>
    )
}