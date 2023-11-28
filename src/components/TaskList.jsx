import React from 'react';
import './styles.css'
import TaskItem from './TaskItem';
import Table from 'react-bootstrap/Table';

const TaskList = ({ listaDeTareas, setListaDeTareas }) => {

    const totalTask = listaDeTareas.filter( t => t.completada);
    const totalIncompletas = listaDeTareas.filter(t => !t.completada);

    return (

        <>
            <div className='h-100 px-5 rounded shadow pt-3' style={{backgroundColor: '#ED9ED6'}}>
            <h1>Lista de tareas</h1>
            <div className='d-flex align-items-center mt-5'>
                <p className='fs-5'>Completas: <span className='badge text-bg-primary'> {totalTask.length}</span></p>
                <p className='mx-5 fs-5'>Pendientes: <span className='badge text-bg-danger fs-4'> {totalIncompletas.length}</span></p>
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

                    {listaDeTareas.map((jsonObj, index) => (
                        <TaskItem jsonObj={jsonObj} index={index} setListaDeTareas={setListaDeTareas} id={index} key={index}/>
                        ))}
                
                </tbody>
            </table>
            </div>
        </>
    )
};

export default TaskList;