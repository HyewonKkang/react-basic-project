import styles from './search_header.module.css';
import React, { useRef, memo } from 'react';

const SearchHeader = memo(
    ({ onSearch }) => { // props= {onSearch}
        const inputRef = useRef(); // return () 안에 있는 것 받아올 때
        const handleSearch = () => {
            const value = inputRef.current.value;
            onSearch(value);
        }
    
        const onClick = () => {
            handleSearch();
            console.log('onClick')
        }
        const onKeyPress = (event) => {
            if(event.key === 'Enter') {
                handleSearch();
            }
            console.log('onKeyPress')
        }
    
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img className={styles.img} src="/images/logo.png" alt="logo" />
                    <h1 className={styles.title}>Youtube</h1>
                </div>
                <input ref={inputRef} className={styles.input} type="search" placeholder="Search..." onKeyPress={onKeyPress}/>
                <button className={styles.button} type="submit" onClick={onClick}>
                    <img className={styles.buttonImg} src="/images/search.png" alt="search" />
                </button>
            </header>
        )
    }    
)

export default SearchHeader;