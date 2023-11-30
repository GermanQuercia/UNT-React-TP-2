import React, { useState } from 'react';
import './styles.css'
import TaskItem from './TaskItem';
import Table from 'react-bootstrap/Table';

const TaskList = ({ listaDeTareas, setListaDeTareas }) => {

    const [totalIncompletas, setTotalIncompletas] = useState(listaDeTareas.filter(t => !t.isCompleted)); 
    const [totalCompletas, setTotalCompletas] = useState(listaDeTareas.filter(t => t.isCompleted));


    function deleteTask(id){

        setListaDeTareas(prev => {
            let listaFiltrada = prev.filter(t => t.id != id);
            return listaFiltrada;
        })

        
    }


    function updateCompleteTask(id){

        console.log('Entro en onChange, el valor de ID es: ', id)

        //Recorre la lista de tareas con map.
    const tasks = listaDeTareas.map( task => {
        if (task.id === id){      //cuando encuentra el valor del id
            task.isCompleted = !task.isCompleted;   //Actualiza el valor de la propiedad isComplete
                                                    //Si es true, lo cambia al contrario
            return task;
        }
        return task;
    })

    console.log(tasks);
    //Actualizamos la lista
    setListaDeTareas(tasks);

    setTotalIncompletas(listaDeTareas.filter(t => !t.isCompleted));
    setTotalCompletas(listaDeTareas.filter(t => t.isCompleted));
   }


    return (

        <>
            <div className='h-100 px-5 rounded shadow pt-3' style={{backgroundColor: '#ED9ED6'}}>
            <h1>Lista de tareas</h1>

            <div className='d-flex mt-2 m-0'>
                <p className='fs-6'>Completas: <span className='badge text-bg-primary'> {totalCompletas.length}</span></p>
                <button className='btn' onClick={() => setListaDeTareas(totalCompletas) }>Ver <i class="fas fa-eye fs-6"></i></button>
                <p className='mx-5 fs-6'>Pendientes: <span className='badge text-bg-danger fs-6'> {totalIncompletas.length}</span></p>
                <button className='btn m-0 p-0' onClick={() => setListaDeTareas(totalIncompletas) }>Ver <i class="fas fa-eye fs-6"></i></button>
                <button onClick={() => setListaDeTareas([...totalCompletas, ...totalIncompletas  ] )}>TODOS</button>
            </div>
            
           
            <table className='table hover stripped shadow' >
                <thead>
                    <tr>
                        <th>#</th>                       
                        <th>Dia</th>
                        <th>Hora</th>
                        <th>Tarea</th>                                                                   
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {listaDeTareas.map((task, index) => (
                        <TaskItem task={task} 
                            key={index}
                            onUpdateCompleted={updateCompleteTask} 
                            onDeleteTask={deleteTask}                             
                            index={index} 
                            />
                        ))}
                
                </tbody>
            </table>
            </div>
        </>
    )
};

export default TaskList;
