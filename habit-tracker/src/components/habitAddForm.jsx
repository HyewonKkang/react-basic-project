import React, { memo } from 'react';
// PureComponent
// component나 state의 변화가 없다면 render() 실행을 막음 => PureComponent(class component에서), memo(function component에서)
// 최상위가 바뀌지 않으면 re-rendering이 발생하지 않음
// React.Component와 다르게 shouldComponentUpdate()를 구현함 -> shallow props and state comparision

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef(); // 멤버 변수를 정의한 후 원하는 리액트 컴포넌트에 ref로 연결

    const onSubmit = event => {
        event.preventDefault(); // 새로고침 방지
        const name = inputRef.current.value;
        name && props.onAdd(name);
        // inputRef.current.value = '';
        formRef.current.reset();
    }

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
            <button className="add-button">Add</button>
        </form>
    ); 
});


export default HabitAddForm;