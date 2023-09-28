import styles from './Itens.module.scss';
import exercises from './itens.json';
import Item from  './Item/'
import { useState, useEffect } from 'react';

interface Props {
    search: string,
    filter: number | null,
    sorter: string
}

export default function Itens(props: Props) {
 const  { search, filter } = props;
 const [list, setList] = useState(exercises);

function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
}

function testFilter(id: number) {
    if(filter !== null) return filter === id;
}

 useEffect(() => {
    const newList =  exercises.filter( item => testSearch(item.title) && 
    testFilter(item.category.id));
    setList(newList);
 }, [search, filter])
    return (
        <div className={styles.itens}>
            {list.map( item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    );
}