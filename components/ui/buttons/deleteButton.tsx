import styles from "@/styles/components/ui/buttons/deleteButton.module.css"

export default function DeleteButton() {
    return (
        <button>
            <img className={styles.deleteIconImg} src="/delete_icon.png" alt="delete x icon" />
        </button>
    )
}