import React from "react";

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    return (
        <tr>
            <td>{el.title}</td>
            <td>{el.completed.toString()}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(el.id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow;
