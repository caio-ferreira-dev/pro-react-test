import styles from "@/styles/components/ui/buttons/deleteButton.module.css";

export default function DeleteButton() {
    return (
        <button>
            <img className={styles.deleteButton} src="/x_button.png" alt="delete button" />
        </button>
    )
}