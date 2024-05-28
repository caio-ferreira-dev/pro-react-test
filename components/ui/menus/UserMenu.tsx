import styles from "@/styles/components/ui/menus/userMenu.module.css";
import { useContext, useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SideMenu from "./SideMenu";
import { DeviceWidthContext } from "../../../context/DeviceWidthContext";

export default function UserMenu() {
    const context = useContext(DeviceWidthContext)
    if (!context) {
      throw new Error('ExampleComponent must be used within a DeviceWidthProvider');
    }
    const { isMobile } = context
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
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

    function renderDesktop() {
        return (
            <>
                <h1>#User</h1>
                <button onClick={e => {setIsMenuOpen(!isMenuOpen)}}>
                    <img className={`${styles.dropdownArrow} ${isMenuOpen ? styles.rotateIcon : ''}`} src="/dropdown_arrow.png" alt="dropdown arrow" width={40} height={40}/>
                </button>
                <DropdownMenu isOpen={isMenuOpen} ref={dropdownRef}/>
                
            </>
        )
    }

    function renderMobile() {
        return (
            <>
                <button onClick={e => {setIsMenuOpen(!isMenuOpen)}}>
                    <img src="/mobile_menu_icon.png" alt="menu icon" width={50} height={50}/>
                </button>
                <SideMenu isOpen={isMenuOpen} />
            </>
        )
    }

    return (
        <div className={styles.userMenuContainer} ref={userRef}>
            {isMobile ? renderMobile() : renderDesktop()}
        </div>
    )
}