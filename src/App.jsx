import React, { useEffect } from 'react';
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  const [listaDeTareas, setListaDeTareas] = useState((window.localStorage.getItem('lista'))?(JSON.parse(window.localStorage.getItem('lista'))):[])


  useEffect(() => {
    try {
      const lista = JSON.parse(window.localStorage.getItem('lista'));
      setListaDeTareas(lista);
    } catch (error) {
      console.log(error)
    }
  }, []);


  useEffect(() => {
    try {
      window.localStorage.setItem('lista', JSON.stringify(listaDeTareas));
    } catch (error) {
      console.error('Error al actualizar la lista de tareas en el almacenamiento local:', error);
    }
  }, [listaDeTareas]);


  return (
    <>
      <div className='conteiner'>
        <div className='lista'>
          <TaskList listaDeTareas={listaDeTareas} setListaDeTareas={setListaDeTareas} />

        </div>
        <div className='nueva'>
          <TaskForm setListaDeTareas={setListaDeTareas} />
        </div>
      </div>
    </>
  )
}

export default App
