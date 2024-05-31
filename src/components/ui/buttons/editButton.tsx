import styles from "@/styles/components/ui/buttons/editButton.module.css";
import EditProductModal from "../modal/EditProductModal";
import { useState } from "react";

interface EditButtonProps {
    productInfo: ProductDataResponse
}

export default function EditButton({ productInfo }: EditButtonProps) {
    const [showEditModal, setShowEditModal] = useState(false)

    return (
        <button>
            <img className={styles.editIcon} src="/edit_icon.png" alt="edit icon" width={24} height={24}/>
            <EditProductModal product={productInfo} show={showEditModal} setShow={setShowEditModal}/>
        </button>
    )
}