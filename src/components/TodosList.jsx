import React from 'react';
import TodoItem from './TodoItem';
import '../styles/App.css';

const TodosList = ({todos, title, deleteTodo, setEditableTodo, setIsEditTodoModal}) => {
    return (
        <div className="todo-list">
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {todos.map(todo => 
                <TodoItem
                    deleteTodo={deleteTodo}
                    setEditableTodo={setEditableTodo}
                    setIsEditTodoModal={setIsEditTodoModal}
                    todo={todo}
                    key={todo.id}
                />
            )}
      </div>
    )
}

export default TodosList;