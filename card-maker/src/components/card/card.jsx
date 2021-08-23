import React from 'react'
import styles from './card.module.css';

function Card({ card }) {
    return (
        <div>
            <h1>{card.id}</h1>
        </div>
    )
}

export default Card;
