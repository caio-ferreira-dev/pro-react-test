import styles from "@/styles/components/ui/searchBar.module.css";

export default function SearchBar() {
    return (
        <div className={styles.searchContainer} >
            <input type="text" className={styles.searchInput} placeholder="Pesquisar produto..."/>
            <button className={styles.searchButton}>
                <img src="/magnifying_glass.png" alt="magnifying glass search icon" />
            </button>
        </div>
    )
}