import styles from './Itens.module.scss';
import exercises from './itens.json';
import Item from  './Item/'

export default function Itens() {
    return (
        <div className={styles.itens}>
            {exercises.map( item => (
                <Item key={item.id}/>
            ))}
        </div>
    );
}