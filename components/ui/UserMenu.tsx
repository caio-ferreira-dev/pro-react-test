import styles from "@/styles/components/ui/userMenu.module.css";
import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import SideMenu from "./SideMenu";

export default function UserMenu() {
    const [isMobile, setIsMobile] = useState<boolean>()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 769) {
            setIsMobile(true)
          } else {
            setIsMobile(false)
          }
        };

        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    function renderDesktop() {
        return (
            <>
                <h1>#User</h1>
                <button onClick={e => {setIsMenuOpen(!isMenuOpen)}}>
                    <img className={`${styles.dropdownArrow} ${isMenuOpen ? styles.rotateIcon : ''}`} src="dropdown_arrow.png" alt="dropdown arrow" width={40} height={40}/>
                </button>
                <DropdownMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                
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
        <div className={styles.userMenuContainer}>
            {isMobile ? renderMobile() : renderDesktop()}
        </div>
    )
}