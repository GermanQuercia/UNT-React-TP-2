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
        setListaDeTareas((prevLista) => {
            const updatedLista = [...prevLista];
            updatedLista[id] = { ...updatedLista[id], completada: !updatedLista[id].completada };
            return updatedLista;
        });
    }
    let clase = jsonObj.completada ? 'task-completa' : '';


    return (
        <>
            <tr className={clase}>
                <td>{index + 1}</td>
                <td>{jsonObj.id}</td>
                <td>{jsonObj.dia}</td>
                <td>{jsonObj.hora}</td>
                <td>{jsonObj.tarea}</td>
                <td>{`${jsonObj.completada}`}</td>
                <td>
                    <Button variant="success" onClick={() => completada(index)}><i className="fas fa-check"></i></Button>
                    <Button variant="danger" onClick={() => eliminarTarea(jsonObj.id)}><i className="fas fa-trash"></i></Button>
                </td>
            </tr>
        </>
    )
}

export default TaskItem;