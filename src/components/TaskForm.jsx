import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

const TaskForm = ({ onSubmit }) => {

    
    const [date, setDate] = useState(getDateWithFormat());
    const [time, setTime] = useState(getTimeWithFormat());
    const [task, setTask] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    


    function getDateWithFormat() {

        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${day}-${month}`;
    }

    function getTimeWithFormat() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }





    // const tareaParaAgregar = {
    //     id: "",
    //     dia: "",
    //     hora: "",
    //     tarea: "",
    //     completada: false,
    // }


    const agregarTarea = () => {

        // const fecha1 = document.getElementById("fechaElegir").value;
        // tareaParaAgregar.dia = fecha1;

        // const hora1 = document.getElementById("horaElegir").value;
        // tareaParaAgregar.hora = hora1;

        // const texto1 = document.getElementById("tareaEscrita").value;
        // tareaParaAgregar.tarea = texto1;

        // function obteberId() {
        //     var d = new Date().getTime();
        //     var uuid = 'xx-xxx'.replace(/[xy]/g, function (c) {
        //         var r = (d + Math.random() * 16) % 16 | 0;
        //         d = Math.floor(d / 16);
        //         return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        //     });
        //     return uuid;
        // }
        // tareaParaAgregar.id = obteberId()
    
        // // Actualizar el estado utilizando la función setListaDeTareas
        // setListaDeTareas(prevLista => [...prevLista, tareaParaAgregar]);

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (task !== ''){      

        onSubmit({
            id: crypto.randomUUID(),
            date:date,
            time:time,
            task:task,
            isCompleted:isCompleted
        })

        }

        setTask('');
        
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="agregar">
                <input type="date"
                        onChange={(ev) => setDate(ev.target.value)} 
                        value={date}/>

                <input type="time" 
                    onChange={(ev) => setTime(ev.target.value)} 
                    value={time}/>
                    
                <input type="text"
                    onChange={(ev) => setTask(ev.target.value)} 
                    value={task}/>
                
                <Button type='submit' variant="success" >Crear tarea</Button>
            </form>
        </>
    )
}

export default TaskForm;
