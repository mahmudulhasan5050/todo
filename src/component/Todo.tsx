import {InitialState} from '../types'

type PropsType = {
    todos: InitialState[] | undefined
    setTodos: (text:InitialState[])=> void
    text: string
    todo: InitialState
}

const Todo = ({text,
    todo,
    todos,
    setTodos}:PropsType) => {

    const deleteHandler = () => {
        if(todos){
            setTodos(todos.filter(el => el.id !== todo.id))
        }
    };
    const completeHandler = () => {
        if(todos){
            setTodos(todos.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed
                    }
                }
                return item;
            }));
        }
    };

    return (
        <div className='todo'>
            <li className={`todo-item 
        ${todo.completed ? 'completed' : ''}`}>
                {text}
            </li>
            <button onClick={completeHandler} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}
export default Todo;