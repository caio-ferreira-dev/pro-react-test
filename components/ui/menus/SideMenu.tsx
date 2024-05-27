import styles from "@/styles/components/ui/menus/sideMenu.module.css";

interface SideMenuProps {
    isOpen: boolean
}

export default function SideMenu({ isOpen }: SideMenuProps) {
    return(
        <>
            <ul className={`${styles.sideMenuContainer} ${isOpen ? styles.showSideMenu : styles.hideSideMenu}`}>
                <li>
                    Gerenciar produtos
                </li>
                <li>
                    Encerrar sessão
                </li>
            </ul>
        </>
    )
}