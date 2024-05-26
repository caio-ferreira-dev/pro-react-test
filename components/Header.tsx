import styles from "@/styles/components/header.module.css";
import SearchBar from "./ui/SearchBar";

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <h1>Pro - React Test</h1>
            <SearchBar />
            <img src="" alt="shopping-cart" />
            <div>
                <h1>user</h1>
                <button></button>
            </div>
        </header>
    )
}