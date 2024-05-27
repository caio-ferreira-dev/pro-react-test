import styles from "@/styles/components/ui/userMenu.module.css";
import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function UserMenu() {
    const [isMobile, setIsMobile] = useState<boolean>()
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

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
                <button onClick={e => {setIsDropdownOpen(!isDropdownOpen)}}>
                    <img className={`${styles.dropdownArrow} ${isDropdownOpen ? styles.rotateIcon : ''}`} src="dropdown_arrow.png" alt="dropdown arrow" width={40} height={40}/>
                </button>
                <DropdownMenu isOpen={isDropdownOpen} />
                
            </>
        )
    }

    function renderMobile() {
        return (
            <>
                <button>
                    <img src="mobile_menu_icon.png" alt="menu icon" width={50} height={50}/>
                </button>
            </>
        )
    }

    return (
        <div className={styles.userMenuContainer}>
            {isMobile ? renderMobile() : renderDesktop()}
        </div>
    )
}