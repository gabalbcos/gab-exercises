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
 const  { search, filter, sorter } = props;
 const [list, setList] = useState(exercises);

function testSearch(title: string) {
    const regex = new RegExp(search, 'i');
    return regex.test(title);
}

function testFilter(id: number) {
    if(filter !== null) return filter === id;
}

function sort(newList: typeof exercises) {
    switch(sorter) {
        case 'reps':
            return newList.sort((a, b) => a.reps > b.reps ? 1 : -1);
        default:
            return newList;
        }
}

 useEffect(() => {
    const newList =  exercises.filter( item => testSearch(item.title) && 
    testFilter(item.category.id));
    setList(sort(newList));
 }, [search, filter, sorter])
    return (
        <div className={styles.itens}>
            {list.map( item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    );
}