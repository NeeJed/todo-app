import React, { useState, useEffect } from 'react';
import './styles/App.css';
import TodosList from './components/TodosList';
import TodoForm from './components/TodoForm';
import Modal from './components/UI/modal/Modal';
import Button from './components/UI/button/Button';
import cockieEditing from './utils/cockieEditing';
import TodosInfo from './components/TodosInfo';
import Footer from './components/Footer';

const App = () => {

const [todos, setTodos] = useState([
  {id: 0, title: 'Завершить проект', desc: '2023', tags: ['Home', 'Project'], completed: false},
  {id: 1, title: 'Проверка', desc: 'eternity', tags: ['Study'], completed: false},
  {id: 2, title: 'Redux', desc: 'Soon', tags: ['Study', 'Home'], completed: false},
]);
const [modalFormVisible, setModalFormVisible] = useState(false);
const [isEditTodoModal, setIsEditTodoModal] = useState(false);
const [editableTodo, setEditableTodo] = useState('');
const [completedTodos, setCompletedTodos] = useState('');

cockieEditing(todos, setTodos);

const createTodo = (newTodo) => {
  setTodos([...todos, newTodo]);
  setModalFormVisible(false);
}

const deleteTodo = (todo) => {
  setTodos(todos.filter(t => t.id !== todo.id))
}

const editTodo = (newTodo) => {
  const newTodos = [...todos].map((item) => item.id === editableTodo.id
    ? item = newTodo
    : item
  );
  setTodos([...newTodos]);
  setIsEditTodoModal(false);
}

useEffect(() => {
  setCompletedTodos(todos.reduce((acc, item) => item.completed === true ? acc += 1 : acc, 0));
}, [todos])

  return (
    <div className="App">
      <Button style={{margin: '25px 0'}} onClick={() => setModalFormVisible(true)}>
        Добавить задачу
      </Button>
      <Modal visible={modalFormVisible} setVisible={setModalFormVisible}>
        <TodoForm create={createTodo}/>
      </Modal>
      <Modal visible={isEditTodoModal} setVisible={setIsEditTodoModal}>
        <TodoForm
          create={editTodo}
          addButtonTitle="Изменить"
          editableTodo={editableTodo}
          setEditableTodo={setEditableTodo}
        />
      </Modal>
      <TodosInfo todos={todos} completedTodos={completedTodos}/>
      {todos.length
        ? <TodosList
            todos={todos}
            title={'Задачи'}
            deleteTodo={deleteTodo}
            setEditableTodo={setEditableTodo}
            setIsEditTodoModal={setIsEditTodoModal}
            setTodos={setTodos}
          />
        : <h2 style={{textAlign: 'center', marginTop: '30px'}}>Список пуст</h2>
      }
      <Footer/>
    </div>
  )
}

export default App;