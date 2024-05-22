import React from 'react'
import { useState } from 'react'

const initialForm = {
    title: "",
    completed: false,
    userId: 1,
    id: null
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!form.title){
            alert("Dato incompleto")
            return
        }

        if(form.id === null){
            createData(form)
        } else{
            updateData(form)
        }

        handleReset()
    }
    const handleReset = (e) => {
        setForm(initialForm)
        setDataToEdit(null)
    }

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder="title" onChange={handleChange} value={form.title} />
                <input type="submit" value="Enviar" />
                <input type='reset' value='Limpiar' onClick={handleReset} />
            </form>

        </div>
    )
}

export default CrudForm