import React, { useState, useEffect } from 'react';
import './todolist.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import { addTodo, handlePopUp, updatedTodo, updateFilter } from '../../redux/Todo/TodoActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OPTIONS = { all: 'All', completed: 'Completed', incomplete: 'Incomplete' }

const Todolist = (props) => {


    const STATUS = { true: 'completed', false: 'incomplete' };

    const [show, setShow] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [options, setOptions] = useState("incomplete");
    const [title, setTitle] = useState("");
    const [selectedDropdown, setSelectedDropdown] = useState("all");
    const [invalidForm, setInvalidForm] = useState(false);
    const [currentTodoData, setCurrentTodoData] = useState({});
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const showNotification = (type, msg) => {
        switch (type) {
            case 'success':
                return toast.success(msg, {
                    position: "top-center",
                    theme: "dark",
                    autoClose: 2000,
                    hideProgressBar: true
                });
            case 'error':
                return toast.error(msg, {
                    position: "top-center",
                    theme: "dark",
                    autoClose: 2000,
                    hideProgressBar: true
                });
            default:
                toast.success("Success!!", {
                    position: "top-center",
                    theme: "dark",
                    autoClose: 2000,
                    hideProgressBar: true
                });
        }
    }

    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    useEffect(() => {
        console.log('filter', props.current_filter);
        if (props.current_todo && props.current_todo !== undefined) {
            setIsUpdateMode(true);
            setTitle(props.current_todo[0].title);
            setOptions(STATUS[props.current_todo[0].isCompleted]);
        } else {
            setIsUpdateMode(false);
            setTitle("");
        }
    }, [props.current_todo])

    const handleClose = () => {
        if (title === undefined || title === "") {
            setInvalidForm(true);
            showNotification('error', 'Please enter the title');
            return;
        } else {
            setIsUpdateMode(false);
            setInvalidForm(false);
            const date = new Date();
            console.log(isCompleted);
            const id = makeid(5);
            if (isUpdateMode) {
                const newTodo = {
                    id: props.current_todo[0].id,
                    title: title,
                    date: date.toLocaleDateString(),
                    isCompleted: options
                }
                props.updatedTodo(newTodo);
                showNotification('success', 'Todo updated successfully');
            } else {
                const newTodo = {
                    id: id,
                    title: title,
                    date: date.toLocaleDateString(),
                    isCompleted: options === 'completed' ? true : false,
                }
                console.log('newTodoData', newTodo);
                props.addTodo(newTodo);
                showNotification('success', 'Todo added successfully')
            }
            props.handlePopUp(false);
            setTitle("");
        }

    };

    const closeForm = () => {
        props.handlePopUp(false)
    }

    const handleShow = () => {
        setInvalidForm(false);
        props.handlePopUp(true);
        setIsUpdateMode(false)
    };

    const handleTitleChange = (event) => {
        if (event.target.value !== "") {
            setInvalidForm(false);
            setTitle(event.target.value);
        }
    }

    const handleOptoinChange = (event) => {
        setOptions(event.target.value)
    }

    const handleDropdown = (value) => {
        console.log('dropdown', OPTIONS[value]);
        setSelectedDropdown(value);
        props.updateFilter(value);

    }

    // useEffect(() => {

    // }, [selectedDropdown]);

    return (<>
        <div className='todo-title'>
            <h5>TODO LIST</h5>
        </div>
        <div className='todo-header col-md-4 offset-4'>
            <div className='header-part'>
                <>
                    <Button variant="primary add-task-btn" onClick={handleShow}>
                        {isUpdateMode ? "Update Task" : "Add Task"}
                    </Button>

                    <Modal show={props.is_pop_up_open} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add TODO</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label className='label'>Title</label>
                            <div className={invalidForm ? 'form-control input-box invalidForm' : 'form-control input-box'}>
                                <input type="text" value={title} onChange={handleTitleChange} placeholder="Add task title" />
                            </div>
                            <label className='label'>Status</label>
                            <div className='form-control input-box'>
                                <select name='languages' value={options} onChange={handleOptoinChange}>
                                    <option value='completed'>
                                        Completed
                                    </option>
                                    <option value='incomplete' selected>
                                        Incomplete
                                    </option>
                                </select>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary add-task-btn" onClick={handleClose}>
                                {isUpdateMode ? "Update Task" : "Add Task"}
                            </Button>
                            <Button variant="secondary" onClick={closeForm}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </div>

            <div className='header-part'>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {OPTIONS[selectedDropdown]}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleDropdown('all')} href="">All</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDropdown('completed')} href="">Completed</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDropdown('incomplete')} href="">Incomplete</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <ToastContainer />
    </>
    );
}

const mapStateToProps = (state) => {
    return {
        is_pop_up_open: state.handle_pop,
        current_todo: state.current_todo,
        todo_list: state.todo_list,
        current_filter: state.current_filter
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        addTodo: data => dispatch(addTodo(data)),
        handlePopUp: (data) => dispatch(handlePopUp(data)),
        updatedTodo: (data) => dispatch(updatedTodo(data)),
        updateFilter: (data) => dispatch(updateFilter(data)),
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Todolist);
