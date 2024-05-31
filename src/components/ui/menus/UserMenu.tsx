import styles from "@/styles/components/ui/menus/userMenu.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SideMenu from "./SideMenu";
import { DeviceWidthContext } from "../../../context/DeviceWidthContext";
import { useUser } from "../../../context/UserContext";
import { useRouter } from "next/router";

export default function UserMenu() {
    // Context
    const context = useContext(DeviceWidthContext)
    if (!context) {
      throw new Error('ExampleComponent must be used within a DeviceWidthProvider');
    }
    const { isMobile } = context
    const { user } = useUser()

    // Router
    const router = useRouter()

    // DropdownMenu control
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    // Refs
    const dropdownRef = useRef<HTMLUListElement>(null)
    const userRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target as Node) && userRef.current && !userRef.current.contains(e.target as Node)) {
                setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
      }, []);

    function renderDropdown() {
        return (
            <>
                <button onClick={e => {setIsMenuOpen(!isMenuOpen)}}>
                    <img className={`${styles.dropdownArrow} ${isMenuOpen ? styles.rotateIcon : ''}`} src="/dropdown_arrow.png" alt="dropdown arrow" width={40} height={40}/>
                </button>
                <DropdownMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} ref={dropdownRef}/>
            </>
        )
    }

    function handleRedirect() {
        router.push('/user/login')
    }

    function renderLoginButton() {
        return (
            <button onClick={handleRedirect}>
                <h1 className={styles.fontWhite}>{user.token === null ? 'Fazer login' : user.username}</h1>
            </button>
        )  
    }

    function renderUserName() {
        return (
            <h1 className={styles.fontWhite}>{user.token === null ? 'Fazer login' : user.username}</h1>
        )
    }

    function renderDesktop() {
        return (
            <>
                {user.token !== null ? renderUserName() : renderLoginButton() }
                {user.token && renderDropdown()}
            </>
        )
    }

    function renderMobile() {
        return (
            <>
                <button onClick={e => {setIsMenuOpen(!isMenuOpen)}}>
                    <img src="/mobile_menu_icon.png" alt="menu icon" width={50} height={50}/>
                </button>
                <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            </>
        )
    }

    return (
        <div className={styles.userMenuContainer} ref={userRef}>
            {isMobile ? renderMobile() : renderDesktop()}
        </div>
    )
}