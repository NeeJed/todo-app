import React, { useRef } from 'react';
import '../styles/App.css';
import Button from './UI/button/Button';
import randomColor from '../utils/randomColor';

const TodoItem = ({deleteTodo, setEditableTodo, setIsEditTodoModal, todo, key, todos, setTodos, index}) => {
    const todoRef = useRef();

    const dragOverHandler = (e) => {
        e.preventDefault();
        if (e.target.className === 'todo') {
            e.target.classList.add('todo_drag');
        }
    }
    const dragLeaveHandler = (e) => {
        e.target.classList.remove('todo_drag');
    }
    const dragStartHandler = (e, index) => {
        e.dataTransfer.setData('draggableTodoIndex', index);
    }
    const dropHandler = (e, replaceableTodoIndex) => {
        e.preventDefault();
        e.target.classList.remove('todo_drag');

        let draggableTodoIndex = e.dataTransfer.getData('draggableTodoIndex');
        const newTodos = [...todos];
        newTodos.splice(replaceableTodoIndex, 1, todos[draggableTodoIndex]);
        newTodos.splice(draggableTodoIndex, 1, todos[replaceableTodoIndex]);
        setTodos(newTodos);
    }

    return (
        <div
            draggable={true}
            ref={todoRef}
            className="todo"
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(e, index)}
            onDrop={(e) => dropHandler(e, index)}
            onDoubleClick={
                function () {
                    if (!todo.completed) {
                        todoRef.current.classList.add('todo_completed');
                        let newTodos = [...todos].map(function (item) {
                            if (item.id === todo.id) {
                                item.completed = true;
                            }
                            return item;
                        })
                        setTodos(newTodos);
                    } else {
                        todoRef.current.classList.remove('todo_completed');
                        let newTodos = [...todos].map(function (item) {
                            if (item.id === todo.id) {
                                item.completed = false;
                            }
                            return item;
                        })
                        setTodos(newTodos);
                    }
                }
            }
        >
            <div className="todo__body">
                <div className="todo__title">{todo.title}</div>
                <div className="todo__desc">{todo.desc}</div>
                <div className="todo_tags">
                    {todo.tags.map((item, index) => 
                        <div
                            style={{borderColor: randomColor()}}
                            className="todo__tag"
                            key={`${item}_${index}_${todo.id}`}
                        >
                            {item}
                        </div>
                    )}
                </div>       
            </div>
            <div className="todo_buttons">
                <Button
                    onClick={function(e) {
                        setEditableTodo(todo);
                        setIsEditTodoModal(true);
                        e.stopPropagation();
                    }}
                >
                    Изменить
                </Button>
                <Button
                    onClick={function(e) {
                        deleteTodo(todo);
                        e.stopPropagation();
                    }}
                >
                    Удалить
                </Button>
            </div>
        </div>
    )
}

export default TodoItem;