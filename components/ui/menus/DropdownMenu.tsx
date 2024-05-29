import styles from "@/styles/components/ui/menus/dropdownMenu.module.css";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import { useUser } from "../../../context/UserContext";

interface DropdownMenuProps {
    isOpen: boolean,
    setIsOpen: Function
}

function DropdownComponent({ isOpen, setIsOpen }: DropdownMenuProps, ref: React.LegacyRef<HTMLUListElement>) {
    // Context
    const { dispatch, user } = useUser()

    // Router
    const router = useRouter()


    function handleLogout() {
        dispatch({type: 'deleteUser'})
        setIsOpen(false)
        router.push('/')
    }

    function handleProductRedirect() {
        router.push('/user/products')
    }

    return (
        <>
            <ul className={`${styles.dropdownContainer} ${isOpen ? styles.showMenu : styles.hideMenu}`} ref={ref}>
                <li>
                    <button onClick={handleProductRedirect}>
                        Gerenciar produtos
                    </button>
                </li>
                <li>
                    <button onClick={handleLogout}>
                        Encerrar sessão
                    </button>
                </li>
            </ul>
            <div className={`${styles.squareContainer} ${isOpen ? styles.showMenu : styles.hideMenu}`}>
                <div className={styles.square}></div>
            </div>
        </>
    )
}

const DropdownMenu = forwardRef(DropdownComponent)
export default DropdownMenu
