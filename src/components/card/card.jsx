import React from 'react'
import './card.css'
/**
 * @param{{monster : monster}} props
 */
export const Card = (props) => {
    return (
        <div>
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <div className='card-container'>{props.monster.name}</div>
        </div>
    )
}