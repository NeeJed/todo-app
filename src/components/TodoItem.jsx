import React from 'react';
import '../styles/App.css';
import Button from './UI/button/Button';
import randomColor from '../utils/randomColor';

const TodoItem = (props) => {
    return (
        <div className="todo">
            <div className="todo__body">
                <div className="todo__title">{props.todo.title}</div>
                <div className="todo__desc">{props.todo.desc}</div>
                <div className="todo_tags">
                    {props.todo.tags.map((item, index) => 
                        <div
                            style={{borderColor: randomColor()}}
                            className="todo__tag"
                            key={`${item}_${index}_${props.todo.id}`}
                        >
                            {item}
                        </div>
                    )}
                </div>       
            </div>
            <div className="todo_buttons">
                <Button
                    onClick={function() {
                        props.setEditableTodo(props.todo);
                        props.setIsEditTodoModal(true)
                    }}
                >
                    Изменить
                </Button>
                <Button
                    onClick={() => props.deleteTodo(props.todo)}
                >
                    Удалить
                </Button>
            </div>
        </div>
    )
}

export default TodoItem;