import styles from './Item.module.scss'

export default function Item() {
    return(
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={} alt="exercise photo"/>
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__titulo}>
                    <h2 className=']'></h2>
                    <p></p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__type}>

                    </div>
                    <div   className={styles.item__portion}>
                        
                    </div>
                    <div className={styles.item__value}> 
                         
                    </div>

                </div>
            </div>
        </div>
    )
}