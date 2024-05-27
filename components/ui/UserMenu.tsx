import styles from "@/styles/components/ui/userMenu.module.css";
import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SideMenu from "./SideMenu";

export default function UserMenu() {
    const [isMobile, setIsMobile] = useState<boolean>()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLUListElement>(null)
    const userRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 769) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        };

        function handleClick(e: any) {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target) && userRef.current && !userRef.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        function removeEvents() {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener("mousedown", handleClick)
        }

        window.addEventListener('resize', handleResize);
        document.addEventListener("mousedown", handleClick)

        return removeEvents()
      }, []);

    function renderDesktop() {
        return (
            <>
                <h1>#User</h1>
                <button onClick={e => {setIsMenuOpen(!isMenuOpen)}}>
                    <img className={`${styles.dropdownArrow} ${isMenuOpen ? styles.rotateIcon : ''}`} src="dropdown_arrow.png" alt="dropdown arrow" width={40} height={40}/>
                </button>
                <DropdownMenu isOpen={isMenuOpen} ref={dropdownRef}/>
                
            </>
        )
    }

    function renderMobile() {
        return (
            <>
                <button onClick={e => {setIsMenuOpen(!isMenuOpen)}}>
                    <img src="mobile_menu_icon.png" alt="menu icon" width={50} height={50}/>
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