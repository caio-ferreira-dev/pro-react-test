import styles from "@/styles/components/ui/buttons/newProductButton.module.css";
import NewProductModal from "../modal/NewProductModal";
import { useState } from "react";
import AddedProductMessage from "../modal/addedProductMessage";

export default function NewProductButton() {
    const [showProductForm, setShowProductForm] = useState(false)
    const [showAddedProductMessage, setShowAddedProductMessage] = useState(false)

    function showMessage() {
        setShowAddedProductMessage(true)
        setTimeout(() => {
            setShowAddedProductMessage(false);
        }, 3000);
    }

    return (
        <button className={styles.newProductContainer} onClick={() => setShowProductForm(true)}> 
            <img className={styles.addButtonImage} src="/add_icon_black.png" alt="add button"/>
            <p className={styles.addFont}>Novo Produto</p>
            <NewProductModal show={showProductForm} setShow={setShowProductForm} showMessage={showMessage}/>
            <AddedProductMessage show={showAddedProductMessage} />
        </button>
    )
}
