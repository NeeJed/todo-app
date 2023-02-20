import React from 'react';
import TodoItem from './TodoItem';
import '../styles/App.css';

const TodosList = ({todos, title, deleteTodo, setEditableTodo, setIsEditTodoModal, setTodos}) => {
    return (
        <div className="todo-list">
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {todos.map((todo, index) => 
                <TodoItem
                    deleteTodo={deleteTodo}
                    setEditableTodo={setEditableTodo}
                    setIsEditTodoModal={setIsEditTodoModal}
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                    index={index}
                />
            )}
      </div>
    )
}

export default TodosList;