import styles from './Exercises.module.scss';
import logo from 'assets/vecteezy-logo.jpg'
import SearchBar from 'pages/SearchBar';
import { useState } from 'react'
import Filters from './Filters/Filters';
import Sorter from 'pages/Sorter';

export default function Exercises() {
    const [search, setSearch] = useState("");
    const[filter, setFilter] = useState<number | null>(null);
    const [sorter, setSorter] = useState("");
    return(
        <main>
            <nav className={styles.menu}>
                <img className={styles.logo} src={logo} alt="Logo for Gab Gym"/>
            </nav>
                <header className={styles.header}>
                    <div className={styles.header__text}>
                         Tough times never last... Only tough people last...
                    </div>
                </header>
                <section className={styles.muscleGroup}>
                    <h3 className={styles.muscleGroup__title}>Muscle Groups</h3>
                    <SearchBar search={search} setSearch={setSearch}/>
                    <div className={styles.muscleGroup__exercise}>
                        <Filters filter={filter} setFilter={setFilter} />
                        <Sorter sorter={sorter} setSorter={setSorter}/>
                   </div>
                </section>
        </main>
    )
}
