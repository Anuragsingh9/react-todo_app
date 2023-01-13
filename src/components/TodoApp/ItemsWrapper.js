import React, { useEffect, useState } from 'react';
import Item from './item';
import { connect } from 'react-redux';
import { updateIncompltedTasksCount } from '../../redux/Todo/TodoActions';

const ItemsWrapper = (props) => {

    const [todoList, setTodoData] = useState("");

    useEffect(() => {
        console.log('todolii', props.todo_list);
        setDtatAccordingFilter();
    }, [props.current_filter, props.todo_list])

    const countIncompletedTodo = () => {
        const incompletedTasks = props.todo_list.filter((current) => {
            return current.isCompleted === false;
        })
        props.updateIncompltedTasksCount(incompletedTasks.length);
    }

    const setDtatAccordingFilter = () => {
        if (props.current_filter === 'completed') {
            const filteredData = props.todo_list.filter((current) => {
                return current.isCompleted === true;
            });
            setTodoData(filteredData);
            countIncompletedTodo();
        } else if (props.current_filter === 'incomplete') {
            const filteredData = props.todo_list.filter((current) => {
                return current.isCompleted === false;
            });
            setTodoData(filteredData);
            countIncompletedTodo();
        } else {
            countIncompletedTodo();
            return setTodoData(props.todo_list);
        }
    }

    return (
        <div className='item-wrapper col-sm-4 offset-4'>
            {todoList.length === 0 && <p className='no_todo'>No Todo Found</p>}
            {todoList && todoList.map((todoData) => (
                <Item todoData={todoData} key={todoData.id} />
            ))}
        </div>
    );
}

const mapDispacthToProps = (dispatch) => {
    return {
        updateIncompltedTasksCount: data => dispatch(updateIncompltedTasksCount(data)),
    }
}

const mapStateToProps = (state) => {
    return {
        todo_list: state.todo_list,
        current_filter: state.current_filter,
        total_incompleted_tasks: state.total_incompleted_tasks,
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(ItemsWrapper);
