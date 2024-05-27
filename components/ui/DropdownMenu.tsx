import styles from "@/styles/components/ui/dropdownMenu.module.css";
import { useEffect, useRef } from "react";

interface DropdownMenuProps {
    isOpen: boolean
    setIsMenuOpen: Function
}

export default function DropdownMenu({ isOpen, setIsMenuOpen }: DropdownMenuProps) {
    const dropdownRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        function handleClick(e: any) {
            if(dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
          }
    }, []) 

    return (
        <>
            <ul className={`${styles.dropdownContainer} ${isOpen ? styles.showMenu : styles.hideMenu}`} ref={dropdownRef}>
                <li>
                    Gerenciar produtos
                </li>
                <li>Encerrar sessão</li>
            </ul>
            <div className={`${styles.squareContainer} ${isOpen ? styles.showMenu : styles.hideMenu}`}>
                <div className={styles.square}></div>
            </div>
        </>
    )
}