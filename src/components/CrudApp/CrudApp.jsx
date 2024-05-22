import React, { useState } from 'react'
import users from '../../user'
import CrudForm from '../CrudForm/CrudForm'
import CrudTable from '../CrudTable/CrudTable'


const CrudApp = () => {
    const [db, setDb] = useState(users)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (data) => {
        data.id = Date.now()
        setDb([...db, data])
    }

    const updateData = (data) => {
        
    }

    const deleteData = (id) => {
        
    }

    return (
        <div>
            <h1>CRUD APP</h1>
            <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
            <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} />
        </div>
    )
}

export default CrudApp