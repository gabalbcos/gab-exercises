import styles from './Itens.module.scss';
import exercises from './itens.json';

export default function Itens() {
    return (
        <div>
            {exercises.map( item => (
                <div>{item.title}</div>
            ))}
        </div>
    );
}