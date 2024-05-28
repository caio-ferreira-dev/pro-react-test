import styles from "@/styles/components/ui/buttons/removeButton.module.css";

export default function RemoveButton() {
    return (
        <button>
            <img className={styles.deleteButton} src="/x_button.png" alt="delete button" />
        </button>
    )
}