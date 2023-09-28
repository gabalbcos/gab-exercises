import styles from './Item.module.scss'
import exercises from '../itens.json'

type Props = typeof exercises[0];

export default function Item(props: Props) {
    const { title, description, primaryMuscle, category, difficulty, photo, reps} = props;
    return(
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={photo} alt={title}/>
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2 >{title}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.item__tags}>
                    <div className={styles.item__type}>
                        {category.label}
                    </div>
                    <div className={styles.item__muscleGroup}>
                        {primaryMuscle}
                    </div>
                    
                    <div   className={styles.item__difficulty}>
                        {difficulty}
                    </div>
                    <div className={styles.item__value}> 
                         {reps}
                    </div>

                </div>
            </div>
        </div>
    )
}