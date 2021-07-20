// Using React Hook
import React, { useState, useRef, useEffect } from 'react';

function SimpleHabit(props) {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = () => {
        setCount(count + 1)
    }

    // useEffect => similar to componetDidMount and componentDidUpdate
    useEffect(() => {
        console.log(`mounted & updated!: ${count}`)
    }, [count]) // count가 변경될 때마다 useEffect() 호출

    return (
        <li className='habit'>
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
}

export default SimpleHabit;