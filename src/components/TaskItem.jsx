import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles.css'

const TaskItem = ({ jsonObj, index, setListaDeTareas }) => {

    
    console.log("elvalor del indice es ", index)

    const borrarTareaCorto = (event) => {
        const idDelElemento = Number(event.target.id);
        setListaDeTareas(prevLista => prevLista.filter((_, i) => i !== idDelElemento)) //funca bien
    };

    const eliminarTarea = (id) => {
        setListaDeTareas(prev => {            
            let listaFiltrada = prev.filter( t => t.id != id);
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

    let clase = jsonObj.completada ? 'task-completa' : 'task-incompleta'

    console.log('clase ', clase)
    return (

        <>
                
                <tr className={clase}>
                    <td>{index + 1}</td>
                    <td>{jsonObj.id}</td>
                    <td>{new Date(jsonObj.dia).toLocaleDateString()}</td>
                    <td>{jsonObj.hora}</td>
                    <td>{jsonObj.tarea}</td>
                    <td>{`${jsonObj.completada}`}</td>
                    <td>
                        {/* <Button variant="danger" id={`${index}`} onClick={borrarTarea}><i class="fas fa-trash"></i></Button> */}
                        <Button variant="success" onClick={() => completada(index)}><i class="fas fa-check"></i></Button>
                        <Button variant="danger" onClick={() => eliminarTarea(jsonObj.id)}><i class="fas fa-trash"></i></Button>
                    </td>
                </tr>
            
        </>

    )

}

export default TaskItem;