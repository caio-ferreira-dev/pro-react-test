import styles from "@/styles/components/header.module.css";
import SearchBar from "./ui/SearchBar";
import UserMenu from "./ui/menus/UserMenu";
import { useContext } from "react";
import CartButton from "./ui/buttons/CartButton";
import { DeviceWidthContext } from "../context/DeviceWidthContext";

export default function Header() {
    const context = useContext(DeviceWidthContext)

    if (!context) {
      throw new Error('ExampleComponent must be used within a DeviceWidthProvider');
    }

    const { isMobile } = context

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
        console.log(isMobile)
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