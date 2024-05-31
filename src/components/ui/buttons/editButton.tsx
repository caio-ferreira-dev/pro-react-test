import styles from "@/styles/components/ui/buttons/editButton.module.css";
import EditProductModal from "../modal/EditProductModal";
import { useState } from "react";
import EditedProductMessage from "../modal/editedProductMessage";

interface EditButtonProps {
    productInfo: ProductDataResponse
}

export default function EditButton({ productInfo }: EditButtonProps) {
    const [showEditModal, setShowEditModal] = useState(false)
    const [showEditedProductMessage, setShowEditedProductMessage] = useState(false)

    function showMessage() {
        setShowEditedProductMessage(true)
        setTimeout(() => {
            setShowEditedProductMessage(false);
        }, 3000);
    }

    return (
        <button onClick={() => setShowEditModal(true)}>
            <img className={styles.editIcon} src="/edit_icon.png" alt="edit icon" width={24} height={24}/>
            <EditProductModal product={productInfo} show={showEditModal} setShow={setShowEditModal} showMessage={showMessage}/>
            <EditedProductMessage show={showEditedProductMessage} />
        </button>
    )
}