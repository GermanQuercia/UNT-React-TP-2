import React from 'react';
import './styles.css'
import TaskItem from './TaskItem';
import Table from 'react-bootstrap/Table';

const TaskList = ({ listaDeTareas, setListaDeTareas }) => {

    
   
    return (
        <>
            <div>
            <h1>Lista de tareas</h1>
            <Table hover striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Dia</th>
                        <th>Hora</th>
                        <th>Tarea</th>
                        <th>Completada</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {listaDeTareas.map((jsonObj, index) => (
                        <TaskItem jsonObj={jsonObj} index={index} setListaDeTareas={setListaDeTareas}/>
                        ))}
                
                </tbody>
            </Table>
            </div>
        </>
    )
};

export default TaskList;