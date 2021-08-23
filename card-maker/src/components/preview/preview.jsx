import React from 'react'
import styles from './preview.module.css';
import Card from '../card/card';

function Preview({ cards }) {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Card Preview</h1>
            {cards.map(card => {
                <Card card={card} />
            })}
        </section>
    )
}

export default Preview;
