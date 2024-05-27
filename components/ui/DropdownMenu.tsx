import styles from "@/styles/components/ui/dropdownMenu.module.css";
import { forwardRef } from "react";

interface DropdownMenuProps {
    isOpen: boolean
}

function DropdownComponent({ isOpen }: DropdownMenuProps, ref: React.LegacyRef<HTMLUListElement>) {
    return (
        <>
            <ul className={`${styles.dropdownContainer} ${isOpen ? styles.showMenu : styles.hideMenu}`} ref={ref}>
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

const DropdownMenu = forwardRef(DropdownComponent)
export default DropdownMenu
