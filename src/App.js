import React, { useState } from 'react';
import './styles/App.css';
import TodosList from './components/TodosList';
import TodoForm from './components/TodoForm';
import Modal from './components/UI/modal/Modal';
import Button from './components/UI/button/Button';
import CockieEditing from './utils/CockieEditing';

const App = () => {

const [todos, setTodos] = useState([
  {id: 0, title: 'test', desc: 't e s t', tags: ['Home', 'Maths', 'jghj']},
  {id: 1, title: 'testh', desc: 't e hs t', tags: ['Study']},
  {id: 2, title: 'Ddfsd esth', desc: 'sdfkfsdfsd', tags: ['Work', 'Side']},
]);
const [modalFormVisible, setModalFormVisible] = useState(false);
const [isEditTodoModal, setIsEditTodoModal] = useState(false);
const [editableTodo, setEditableTodo] = useState('');

CockieEditing(todos, setTodos);

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
      {todos.length
        ? <TodosList
            todos={todos}
            title={'Задачи'}
            deleteTodo={deleteTodo}
            setEditableTodo={setEditableTodo}
            setIsEditTodoModal={setIsEditTodoModal}
          />
        : <h2 style={{textAlign: 'center', marginTop: '30px'}}>Список пуст</h2>
      }
    </div>
  )
}

export default App;