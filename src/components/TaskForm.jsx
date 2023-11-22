import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

const TaskForm = ({ setListaDeTareas }) => {

    const ID = 1;
    const [dia, setDia] = useState("");
    const tareaParaAgregar = {
        id: "",
        dia: "",
        hora: "",
        tarea: "",
        completada: false,
    }


    const agregarTarea = () => {

        const fecha1 = document.getElementById("fechaElegir").value;
        tareaParaAgregar.dia = fecha1;

        const hora1 = document.getElementById("horaElegir").value;
        tareaParaAgregar.hora = hora1;

        const texto1 = document.getElementById("tareaEscrita").value;
        tareaParaAgregar.tarea = texto1;

        function obteberId() {
            var d = new Date().getTime();
            var uuid = 'xx-xxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        }
        tareaParaAgregar.id = obteberId()

        // Actualizar el estado utilizando la función setListaDeTareas
        setListaDeTareas(prevLista => [...prevLista, tareaParaAgregar]);

    };

    const handleSubmit = (event) => {
        if (document.getElementById("tareaEscrita").value !== "") {
            event.preventDefault();
            agregarTarea();
        }
        else {
            alert("La tarea no puede estar vacía")
        }

        if (document.getElementById("fechaElegir").value === "") {
            tareaParaAgregar.dia = ("Sin fecha");
        }

        if (document.getElementById("horaElegir").value === "") {
            tareaParaAgregar.hora = ("Sin hora");
        }

        document.getElementById("tareaEscrita").value = "";
        document.getElementById("fechaElegir").value = "dd-mm-aaaa";
        document.getElementById("horaElegir").value = "";
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="agregar">
                <input type="date" id="fechaElegir" value={dia} onChange={(ev) => setDia(ev.target.value)} />
                <input type="Time" id="horaElegir" />
                <input type="text" rows="5" id="tareaEscrita" />
                <Button type='submit' variant="success" >Crear tarea</Button>
            </form>
        </>
    )
}

export default TaskForm;
