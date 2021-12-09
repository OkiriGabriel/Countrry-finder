import React from 'react';
import {Link} from 'react-router-dom'
import Card from './Card'

function CardList ({results}) {
    let data = [];
    if (results.data) {
        data = results.data.Search || [];
    }
    return (
        <div className='container'>
            <Link>
                {data.map((item) => (
                    <Card key={item.imdbID} movie={item} />
                ))}
            </Link>
        </div>
    )
}
export default CardList;