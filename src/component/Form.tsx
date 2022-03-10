import {InitialState} from '../types'


type PropsType = {
    todos: InitialState[]
    setTodos: (text:InitialState[])=> void
    inputText: string
    setInputText: (text:string) => void
    setStatus: (text:string) => void
}

const Form = ({todos,
    setTodos,
    inputText,
    setInputText,
    setStatus}:PropsType) => {

    //take value from input onChange
    const inputTextHandler = (e:any) => {
        setInputText(e.target.value);
    };

    //after click value will be saved in todos
    const submitTodoHandler = (e: any) => {
        e.preventDefault();
        if (inputText !== "") {
            setTodos([...todos, 
                {
                       text: inputText,
                       completed: false,
                        id: Math.random() * 1000
                    }
            ]);
            setInputText("");
        }
    }

    const statusHandler = (e:any) => {
        setStatus(e.target.value);
    }
    return (
        <div>
            <form>
                <input value={inputText}
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