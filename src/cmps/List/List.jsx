
import React from 'react'
import './List.scss'
import Preview from '../Preview/Preview';

const List = ({ items }) => {

    return (
        <ul className={`list clean-list flex column space-between`}>
            {items.map((item, idx) => <Preview key={idx} item={item} idx={idx} />)}
        </ul>
    )


}

export default List
