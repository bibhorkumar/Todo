import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const Input = ({addTask}) => {

    const [inputVal,setInputVal]= useState('')
    const handleChange =(event)=>{
        setInputVal(event.target.value);
    };

    const onClick =() =>{
        if(inputVal!=''){
            const newTask ={ id: uuidv4(), task: inputVal}
            addTask(newTask)
            setInputVal('')
        }
    }
    
  return (
    <>
        <h1 className='text-center text-lg'>Yo Task🤘</h1>
        <h1 className='text-lg'>Enter a Task:</h1>
        <div className='flex justify-between my-4'>
          <input className='rounded-lg px-2' type='text' placeholder='type here...' name='taskInput' value={inputVal} onChange={handleChange}/>
          <button className='rounded-lg bg-sky-600 p-2 text-white' onClick={onClick}>Add Task</button>
        </div>
    </>
    
  )
}

export default Input