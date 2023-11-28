import React, { useEffect } from 'react';
import { useState } from 'react';
import TaskForm from './components/TaskForm';

import TaskList from './components/TaskList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [task, setTask] = useState({});

  const [listaDeTareas, setListaDeTareas] = useState(() => {
    try {
      const storedLista = window.localStorage.getItem('lista');
      return storedLista ? JSON.parse(storedLista) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });
  
  useEffect(() => {
    try {
      window.localStorage.setItem('lista', JSON.stringify(listaDeTareas));
    } catch (error) {
      console.error(error);
    }
  }, [listaDeTareas]);


  function addTask(task){
    setListaDeTareas([...listaDeTareas, task])
  }
  return (
    <>
      <div className='conteiner'>
        <div className='lista'>
          <TaskList listaDeTareas={listaDeTareas} setListaDeTareas={setListaDeTareas} />
        </div>
        <div className='nueva'>
          {/* <TaskForm setListaDeTareas={setListaDeTareas} /> */}
          <TaskForm onSubmit={(newTask) => addTask(newTask)} />
        </div>
      </div>
    </>
  )
}

export default App
