import styles from "@/styles/components/header.module.css";
import SearchBar from "./ui/SearchBar";
import UserMenu from "./ui/menus/UserMenu";
import { useContext } from "react";
import CartButton from "./ui/buttons/CartButton";
import { DeviceWidthContext } from "../context/DeviceWidthContext";

interface HeaderProps {
    issuer: 'client' | 'user',
}

export default function Header({ issuer }: HeaderProps) {
    const context = useContext(DeviceWidthContext)

    if (!context) {
      throw new Error('ExampleComponent must be used within a DeviceWidthProvider');
    }

    const { isMobile } = context

    function renderMobile() {
        return (
            <>
                <UserMenu />
                <SearchBar issuer={issuer}/>
                <CartButton />
            </>
        )
    }

    function renderDesktop() {
        return (
            <>
                <h1 className={styles.projectTitle}>Pro - React Test</h1>
                <SearchBar issuer={issuer}/>
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