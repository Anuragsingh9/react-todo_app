import React, { useEffect, useState } from 'react';
import Item from './item';
import { connect } from 'react-redux';

const ItemsWrapper = (props) => {

    const [todoList, setTodoData] = useState("");

    useEffect(() => {
        console.log('todolii', props.todo_list);
        setDtatAccordingFilter();
    }, [props.current_filter, props.todo_list])

    const setDtatAccordingFilter = () => {
        console.log('todoList', todoList)
        if (props.current_filter === 'completed') {
            const filteredData = props.todo_list.filter((current) => {
                return current.isCompleted === true;
            });
            setTodoData(filteredData);
        } else if (props.current_filter === 'incomplete') {
            const filteredData = props.todo_list.filter((current) => {
                return current.isCompleted === false;
            });
            setTodoData(filteredData);
        } else {
            return setTodoData(props.todo_list);
        }
    }

    return (
        <div className='item-wrapper col-md-4 offset-4'>
            {todoList.length === 0 && <p className='no_todo'>No Todo Found</p>}
            {todoList && todoList.map((todoData) => (
                <Item todoData={todoData} key={todoData.id} />
            ))}
        </div>
    );
}

const mapDispacthToProps = () => {
    return {
    }
}

const mapStateToProps = (state) => {
    return {
        todo_list: state.todo_list,
        current_filter: state.current_filter
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(ItemsWrapper);
