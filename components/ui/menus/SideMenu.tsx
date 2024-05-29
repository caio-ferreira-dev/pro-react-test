import styles from "@/styles/components/ui/menus/sideMenu.module.css";
import { useRouter } from "next/router";
import { useUser } from "../../../context/UserContext";

interface SideMenuProps {
    isOpen: boolean,
    setIsOpen: Function
}

export default function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
    // Context
    const { dispatch, user } = useUser()

    // Router
    const router = useRouter()

    // Handling actions
    function handleLogin() {
        router.push('/user/login')
    }

    function handleLogout() {
        dispatch({type: 'deleteUser'})
        setIsOpen(false)
        router.push('/')
    }


    // Rendering if the user is/isn't logged
    function renderLogin() {
        return (
            <>
                <li onClick={handleLogin}>
                    Fazer Login
                </li>
            </>
        )
    }
    
    function handleProductRedirect() {
        router.push('/user/products')
    }

    function renderLogged() {
        return (
            <>
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
            </>
        )
    }

    return(
        <>
            <ul className={`${styles.sideMenuContainer} ${isOpen ? styles.showSideMenu : styles.hideSideMenu}`}>
                {user.token ? renderLogged() : renderLogin()}
            </ul>
        </>
    )
}