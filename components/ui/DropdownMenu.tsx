import styles from "@/styles/components/ui/dropdownMenu.module.css";

interface DropdownMenuProps {
    isOpen: boolean
}

export default function DropdownMenu({ isOpen }: DropdownMenuProps) {
    return (
        <>
            <ul className={`${styles.dropdownContainer} ${isOpen ? styles.showMenu : styles.hideMenu}`}>
                <li>
                    Gerenciar produtos
                </li>
                <li>Encerrar sessão</li>
            </ul>
            <div className={`${styles.squareContainer} ${isOpen ? styles.showMenu : styles.hideMenu}`}>
                <div className={styles.square}></div>
            </div>
        </>
    )
}