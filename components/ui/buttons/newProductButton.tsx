import styles from "@/styles/components/ui/buttons/newProductButton.module.css";

export default function NewProductButton() {
    return (
        <button className={styles.newProductContainer}> 
            <img className={styles.addButtonImage} src="/add_icon_black.png" alt="add button"/>
            <p className={styles.addFont}>Novo Produto</p>
        </button>
    )
}
