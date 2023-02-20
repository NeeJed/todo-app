import React from 'react';
import '../styles/App.css';

const TodosInfo = ({todos, completedTodos}) => {
    return (
        <div className='todos-total'>
            <div className='todos-total__data'>
                Всего задач
                <div className='todos-total__value'>
                    {todos.length}
                </div>
            </div>
            <div className='todos-total__data'>
                Выполнено
                <div className='todos-total__value'>
                    {completedTodos}
                </div>
            </div>
        </div>
    )
}

export default TodosInfo;