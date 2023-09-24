import React from "react"
import styles from "./SearchBar.module.scss"
import { CgSearch } from 'react-icons/cg';

interface SearchBarProps {
    search: string,
    setSearch:  React.Dispatch<React.SetStateAction<string>>
}


export default function SearchBar({ search, setSearch }: SearchBarProps) {
    return(
        <div className={styles.searchBar}>
            <input 
                value={search}
                placeholder='Search'
                onChange={(event) => setSearch(event.target.value)}/>
            <CgSearch size={20}
            color="#4C4D4F" />
        </div>
    )
}