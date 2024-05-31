import styles from "@/styles/components/ui/searchBar.module.css";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
    issuer: 'client' | 'user'
}

export default function SearchBar({ issuer }: SearchBarProps) {
    // PageRouter
    const router = useRouter();

    // SearchInput state
    const [searchInput, setSearchInput] = useState('')
    
    // SearchInput change
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchInput(e.target.value)
    }

    // Allow to search with "Enter" key
    function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
        if(e.key === 'Enter') {
            handleRouting()
        }
    }

    // PageRouting function
    function handleRouting() {
        if(issuer === "client") {
            if(searchInput.length == 0) {
                router.push(`/search`)
            } else {
                router.push(`/search?title=${searchInput}`)
            }
        }
        if(issuer === "user") {
            router.push(`/user/product?title=${searchInput}`)
        }
    }
   
    return (
        <div className={styles.searchContainer} >
            <input type="text" className={styles.searchInput} placeholder="Pesquisar produto..." value={searchInput} onChange={e => handleChange(e)} onKeyDown={handleEnter}/>
            <button className={styles.searchButton} onClick={handleRouting}>
                <img src="/magnifying_glass.png" alt="magnifying glass search icon" />
            </button>
        </div>
    )
}