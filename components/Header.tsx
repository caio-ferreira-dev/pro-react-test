import styles from "@/styles/components/header.module.css";
import SearchBar from "./ui/SearchBar";
import UserMenu from "./ui/UserMenu";
import { useEffect, useState } from "react";
import CartButton from "./ui/CartButton";

export default function Header() {
    const [isMobile, setIsMobile] = useState<boolean>()
    
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

    function renderMobile() {
        return (
            <>
                <UserMenu />
                <SearchBar />
                <CartButton />
            </>
        )
    }

    function renderDesktop() {
        return (
            <>
                <h1 className={styles.projectTitle}>Pro - React Test</h1>
                <SearchBar />
                <CartButton />
                <UserMenu />
            </>
        )
    }
    return (
        <header className={styles.headerContainer}>
            {isMobile ? renderMobile() : renderDesktop()}
        </header>
    )
}