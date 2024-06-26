import React from 'react'
import CrudTableRow from '../CrudTableRow/CrudTableRow'

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div>
            <h3>Tabla de Datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Completed</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                
                <tbody>
                    {data.length === 0 
                    ? <tr><td colSpan="3">No hay datos</td></tr> 
                    : (data.map((el) => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />))}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable