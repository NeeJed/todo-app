import React, { useState, useRef } from 'react';
import Input from './UI/input/Input';
import Button from './UI/button/Button';
import '../styles/App.css';

const TodoForm = ({create, addButtonTitle = "Добавить", editableTodo, setEditableTodo}) => {

    const [todo, setTodo] = useState({title: '', desc: '', tags: []});
    const inputTitleRef = useRef();
    const [isEdit, setIsEdit] = useState(true);

    if (editableTodo && isEdit) {
        setTodo({
            title: editableTodo.title,
            desc: editableTodo.desc,
            id: editableTodo.id,
            tags: editableTodo.tags,
        });
        setIsEdit(false);
    }

    if (todo.title !== '' && todo.desc !== '' && !isEdit && todo.id !== editableTodo.id) {
        setTodo({
            title: editableTodo.title,
            desc: editableTodo.desc,
            id: editableTodo.id,
            tags: editableTodo.tags,
        });
    }

    const addTodo = (e) => {
        e.preventDefault();
        if (todo.title.length) {
            const newTodo = {
                ...todo, id: Date.now(),
            }
            create(newTodo);
            setTodo({title: '', desc: '', tags: []});
            setIsEdit(true);
        } else {
            inputTitleRef.current.classList.add('myInputError');
            setTimeout(() => {
                inputTitleRef.current.classList.remove('myInputError');
            }, 800);
        }
    }

    return (
        <form className="form">
            <Input
                ref={inputTitleRef}
                type="text"
                placeholder="Название..."
                value={todo.title}
                onChange={e => setTodo({...todo, title: e.target.value})}
            />
            <Input
                type="text"
                placeholder="Описание..."
                value={todo.desc}
                onChange={e => setTodo({...todo, desc: e.target.value})}
            />
            <Input
                type="text"
                placeholder="Введите теги через пробел..."
                value={todo.tags.join(' ')}
                onChange={e => setTodo({...todo, tags: e.target.value.split(' ')})}
            />
            <Button
                onClick={function (e) {
                    addTodo(e);
                    if (setEditableTodo) {
                        setEditableTodo('');
                    }
                }}
            >
                {addButtonTitle}
            </Button>
        </form>
    )
}

export default TodoForm;