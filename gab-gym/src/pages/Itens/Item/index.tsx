import styles from './Item.module.scss'
import exercises from '../itens.json'
import classNames from 'classnames';

type Props = typeof exercises[0];

export default function Item(props: Props) {
    const { title, description, primaryMuscle, category, difficulty, photo, reps } = props;
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
                    <div className={classNames({
                        [styles.item__type]: true,
                        [styles[`item__type__${category.label.toLowerCase()}`]]: true
                    })}
                    >
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