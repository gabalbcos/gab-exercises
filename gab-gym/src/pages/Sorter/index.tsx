import { useState } from 'react';
import styles from "./Sorter.module.scss"
import options from "./options.json"
import classNames from 'classnames';


export default function Sorter() {
    const [open, setOpen] = useState(false);
    return(
        <button 
                onClick={() => setOpen(!open)}
                className={styles.sorter}
                onBlur={() => setOpen(false)}
                >

        <span>Sort by:</span>
        <div className={classNames({
            [styles.sorter__options]: true,
            [styles["sorter__options--active"]]: open
        })}>
            {options.map(option => (
            <div className={styles.sorter__options} key={option.value}>
                {option.name}
            </div>
        ))}
        </div>
        </button>
    )
}