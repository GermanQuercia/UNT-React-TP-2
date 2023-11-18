import React, { useEffect } from 'react';
import { useState } from 'react';
import TaskForm from './components/r_TaskForm';
import TaskList from './components/r_TaskList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [listaDeTareas, setListaDeTareas] = useState([
    {
      id: 1,
      dia: "2023-12-1",
      hora: "20:55",
      tarea: "tareaUno",
      completada: false,
    },
    {
      id: 2,
      dia: "2023-12-2",
      hora: "21:56",
      tarea: "tareaDos",
      completada: false,
    }
  ])


  return (
    <><div className='contenedor'>
      <div className='lista'>
      <TaskList listaDeTareas={listaDeTareas} setListaDeTareas={setListaDeTareas} />
      </div>
      <div className='nueva'>
      <TaskForm listaDeTareas={listaDeTareas} setListaDeTareas={setListaDeTareas} />
      </div>
      </div>
    </>
  )
}

export default App
