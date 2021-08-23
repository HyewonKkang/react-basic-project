import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

function Maker({ authService }) {

    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'Ellie',
            company: 'Samsung',
            title: "Software Engineeer",
            email: 'ellie@gmail.com',
            fileName: 'ellie',
            fileURL: 'ellie.png',
        },
        {
            id: '2',
            name: 'Ellie2',
            company: 'Samsung',
            title: "Software Engineeer",
            email: 'ellie@gmail.com',
            fileName: 'ellie',
            fileURL: 'ellie.png',
        },
        {
            id: '3',
            name: 'Ellie3',
            company: 'Samsung',
            title: "Software Engineeer",
            email: 'ellie@gmail.com',
            fileName: 'ellie',
            fileURL: 'ellie.png',
        }
    ])
    const history = useHistory();

    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        })
    })

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}
export default Maker;
