import styles from "@/styles/components/ui/buttons/editButton.module.css";

export default function EditButton() {
    return (
        <button>
            <img className={styles.editIcon} src="/edit_icon.png" alt="edit icon" width={24} height={24}/>
        </button>
    )
}