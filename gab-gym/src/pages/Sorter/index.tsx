import styles from "./Sorter.module.scss"
import options from "./options.json"


export default function Sorter() {
    return(
        <button className={styles.sorter}>
        <span>Sort by:</span>
        <div className={styles.sorter__options}>
            {options.map(option => (
            <div className={styles.sorter} key={option.value}>
                {option.name}
            </div>
        ))}
        </div>
        </button>
    )
}