import React from 'react';
import Todo from './Todo';
import {InitialState} from '../types'


type PropsType = {
    todos: InitialState[] | undefined
    setTodos: (text:InitialState[])=> void
    filteredTodos: InitialState[] | undefined
}

const TodoList = ({todos,setTodos,filteredTodos}: PropsType) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos?.map(todo => (
                    <Todo text={todo.text}
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;