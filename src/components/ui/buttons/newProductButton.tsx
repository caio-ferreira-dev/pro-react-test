import styles from "@/styles/components/ui/buttons/newProductButton.module.css";
import NewProductModal from "../modal/NewProductModal";
import AddedProductModal from "../modal/addedProductModal";
import { useEffect, useState } from "react";

export default function NewProductButton() {
    const [showProductForm, setShowProductForm] = useState(false)
    const [showAddedProductForm, setShowAddedProductForm] = useState(false)

    useEffect(() => {
        if(!showProductForm) {
            setShowAddedProductForm(true)
            setTimeout(() => {
                setShowAddedProductForm(false);
            }, 3000);
        }
    }, [showProductForm])

    return (
        <button className={styles.newProductContainer} onClick={() => setShowProductForm(true)}> 
            <img className={styles.addButtonImage} src="/add_icon_black.png" alt="add button"/>
            <p className={styles.addFont}>Novo Produto</p>
            <NewProductModal show={showProductForm} setShow={setShowProductForm} />
            <AddedProductModal show={showAddedProductForm} />
        </button>
    )
}
