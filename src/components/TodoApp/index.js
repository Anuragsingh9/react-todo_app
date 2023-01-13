import React from 'react';
import ItemsWrapper from './ItemsWrapper';
import Todolist from './Todolist';

const TodoListWrap = () => {
    return (
        <div className='todo-container'>
            <Todolist />
            <ItemsWrapper />
        </div>
    );
}

export default TodoListWrap;
