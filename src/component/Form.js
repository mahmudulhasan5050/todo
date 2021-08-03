import React from 'react';

const Form = (props) => {

    //take value from input onChange
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    };

    //after click value will be saved in todos
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if (props.inputText !== "") {
            props.setTodos([
                ...props.todos, {
                    text: props.inputText,
                    completed: false,
                    id: Math.random() * 1000
                }
            ]);
            props.setInputText("");
        }
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value);
    }
    return (
        <div>
            <form>
                <input value={props.inputText}
                    onChange={inputTextHandler}
                    type="text"
                    className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default Form;