import React, { PureComponent } from 'react';

class Habit extends PureComponent { 
    // PureComponent 사용시 본인의 state 없이 props만 가져 render() x
    // props으로 전달된 콜백함수들 호출, props으로 전달받은 각각의 데이터를 다시 인자로 전달

    componentDidMount() { // component가 ui 상에 등록될 때
        console.log(`habit: ${this.props.habit.name} mounted`)
    }

    componentWillUnmount() { // component가 ui 상에서 지워질 때
        console.log(`habit: ${this.props.habit.name} willUnmount`)
    }

    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const { name, count } = this.props.habit; // props : habits.jsx에서 받아옴
        return (
        <li className='habit'>
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default Habit;