import { getTodo } from "./TodoActions";
import { ADD_TODO, HANDLE_POP_UP, UPDATE_CHECKBOX, GET_SINGLE_TODO, CURRENT_TODO_DATA, UPDATE_TODO, DELETE_TODO, CURRENT_FILTER } from "./TodoTypes";

const initialState = {
    todo_list: [
        {
            id: 1,
            isCompleted: true,
            title: "Demo Todo one",
            date: "12-09-2022"
        },
        {
            id: 2,
            isCompleted: false,
            title: "Demo Todo Two",
            date: "12-09-2022"
        }
    ],
    handle_pop: false,
    single_todo: null,
    current_todo: "",
    current_filter: 'all'
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo_list: [...state.todo_list, action.payload]
            }
        case UPDATE_CHECKBOX:
            let data = updateTodo(state, action.payload);
            return {
                ...state,
                todo_list: data
            }
        case UPDATE_TODO:
            let todo_data = updateTodo(state, action.payload);
            return {
                ...state,
                todo_list: todo_data
            }
        case DELETE_TODO:
            let delete_data = deleteTodo(state, action.payload);
            console.log('curr after delete', delete_data)
            return {
                ...state,
                todo_list: delete_data
            }
        case HANDLE_POP_UP:
            return {
                ...state,
                handle_pop: action.payload
            }
        case GET_SINGLE_TODO:
            console.log('reducer', action.payload);
            let single_todo_data = findTodo(action.payload, state);
            console.log('reducer1', single_todo_data);
            return {
                ...state,
                single_todo: single_todo_data
            }
        case CURRENT_TODO_DATA:
            return {
                ...state,
                current_todo: action.payload
            }
        case CURRENT_FILTER:
            return {
                ...state,
                current_filter: action.payload
            }
        default: return state
    }
}

const updateTodo = (state, payload) => {
    return state.todo_list.map((current) => {
        if (current.id == payload.id) {
            return {
                ...current,
                ...payload,
            }
        } else {
            return current;
        }
    });
}

const deleteTodo = (state, payload) => {
    console.log('curr delete item', payload)
    return state.todo_list.filter((current) => {
        return current.id != payload;
    });
}

const findTodo = (id, state) => {
    return state.todo_list.filter((current) => {
        return current.id == id;
    });
}

export default todoReducer;