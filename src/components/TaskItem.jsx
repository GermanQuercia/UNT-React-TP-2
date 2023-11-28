import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css'

const TaskItem = ({ jsonObj, index, setListaDeTareas }) => {


    const borrarTareaCorto = (index) => {
        setListaDeTareas(prevLista => prevLista.filter((_, i) => i !== index)) //funca bien
    };

    const eliminarTarea = (id) => {
        setListaDeTareas(prev => {
            let listaFiltrada = prev.filter(t => t.id != id);
            return listaFiltrada;
        })
    }

    const borrarTarea = function (event) {
        const idDelElemento = Number(event.target.id);

        setListaDeTareas(function (prevLista) {
            return prevLista.filter(function (_, i) {
                return i !== idDelElemento;
            });
        });
    };

    

    function completada(id) {
        const idDelElemento = id;

        setListaDeTareas((prevLista) => {
            // Create a new array to avoid mutating the previous state
            const updatedLista = [...prevLista];
            // Update the completed status of the task at idDelElemento
            updatedLista[idDelElemento] = { ...updatedLista[idDelElemento], completada: !updatedLista[idDelElemento].completada };
            // Return the updated array
            return updatedLista;
        });
    }

    let clase = jsonObj.completada ? 'task-completa' : '';


    return (
        <>
            <tr className={clase}>
                <td>{index + 1}</td>
                
                <td>{jsonObj.date}</td>
                <td>{jsonObj.time}</td>
                <td>{jsonObj.task}</td>
                
                <td>
                    {/* <Button variant="danger" id={`${index}`} onClick={borrarTarea}><i class="fas fa-trash"></i></Button> */}
                    <button className='btn' onClick={() => completada(index)}><i className="fas fa-check text-success"></i></button>
                    <button className='btn' onClick={() => eliminarTarea(jsonObj.id)}><i className="fas fa-trash text-danger"></i></button>
                </td>
            </tr>
        </>
    )
}

export default TaskItem;