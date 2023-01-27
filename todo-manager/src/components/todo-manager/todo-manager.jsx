import './styles.css';
import React, { useReducer, useRef, useMemo } from 'react';

const ACTIONS = {
    ADD_TODO: 'add-todo',
    REMOVE_TODO: 'remove-todo',
}

function reducer (state, action) {
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return {
                todos: [...state.todos, { id: Math.floor(Math.random() * 10000), name: action.payload }]
            };
        case ACTIONS.REMOVE_TODO:
            return {
                todos: [...state.todos.filter(todo => todo.name !== action.payload)]
            }
        default:
            return;
    }
}

const TodoManager = ( {todos, updateTodos} ) => {
    const [state, dispatch] = useReducer(reducer, { todos });
    const inputRef = useRef(null);
    const isChanged = useMemo(() => {
        return JSON.stringify(state.todos) !== JSON.stringify(todos);
    }, [state.todos])

    function handleAdd () {
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: inputRef.current.value,
        });
    }

    function handleDelete () {
        dispatch({
            type: ACTIONS.REMOVE_TODO,
            payload: inputRef.current.value,
        });
    }

    function handleSave () {
        updateTodos(state.todos);
    }

    return (
        <div className="todos-container">
            <input type="text" name="input" className="todos-input" placeholder="Enter a todo..." ref={inputRef}/>
            <div className="todos-btn-wrapper">
                <button className="todos-btn" onClick={handleAdd}> ADD</button>
                <button className="todos-btn" onClick={handleDelete}> DELETE</button>
            </div>
            {isChanged &&
                <button className="todos-btn" onClick={handleSave}> SAVE </button>
            }
        </div>
    )

}

export default TodoManager;
