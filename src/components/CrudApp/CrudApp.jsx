import React, { useState } from 'react'
import users from '../../user'
import CrudForm from '../CrudForm/CrudForm'
import CrudTable from '../CrudTable/CrudTable'
import '../../index.css'


const CrudApp = () => {
    const [db, setDb] = useState(users)
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (data) => {
        data.id = Date.now()
        setDb([...db, data])
    }

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData)
    }

    const deleteData = (id) => {
        let isDelete = window.confirm(`¿Estas seguro de eliminar el dato con id: '${id}'?`)

        if(isDelete){
            let newData = db.filter(el => el.id !== id)
            setDb(newData)
        } else {
            return
        }
    }

    return (
        <div>
            <h1>CRUD APP</h1>
            <article className='grid-1-2'>
                <CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
                <CrudTable data={db} deleteData={deleteData} setDataToEdit={setDataToEdit} />
            </article>
        </div>
    )
}

export default CrudApp