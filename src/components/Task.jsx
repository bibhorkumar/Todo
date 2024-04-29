import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { FaPenToSquare } from 'react-icons/fa6'

const Task = ({ id, task, deleteTask,updateTask }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [editedTask, setEditedTask] = useState(task)
    const [checked, setChecked] =useState(false)

    function deleteBtn() {
        console.log(id)
        deleteTask(id)
    }
    function editTask() {
        setIsEdit(true)
    }

    const handleChange = (e) => {
        setEditedTask(e.target.value)
    }

    const handleKeyDown =(e) =>{
        //console.log(e.key)
        if(e.key=='Enter'){
            //const updatedTask = {id: task.id}
            setIsEdit(false)
            console.log('updated',editedTask)
            updateTask(id, editedTask)
        }
    }

    const handleCheckbox =(e)=>{
        setChecked(e.target.checked)
    }

    return (
        <div className='my-5 p-2 rounded-lg bg-sky-600 text-white flex justify-between items-center'>
            <input type='checkbox' onChange={handleCheckbox}/>
            {isEdit ? (<input className='rounded-lg px-2 text-black' type='text' name='taskInput' value={editedTask} onChange={handleChange} onKeyDown={handleKeyDown} />) : <span className={checked ? 'line-through text-black':''}>{editedTask}</span>}
            <div className='flex gap-2'>
                <button onClick={editTask}><FaPenToSquare /></button>
                <button onClick={deleteBtn}><FaTrash /></button>
            </div>

        </div>
    )
}

export default Task