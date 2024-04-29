import React, { useState,useEffect } from 'react'
import TaskList from './components/TaskList'
import Input from './components/Input'
import taskList from './taskList.json'

const App = () => {
  
  const [tasks, setTasks] =useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/api")
    .then(res=>res.json())
    .then(data=>setTasks(data))
  },[])

  const addTask = (newTask) =>{
    const requestOptions ={
      method : 'Post',
      headers: {'Content-Type': 'application/json'},
      body :JSON.stringify(newTask)
    };

    fetch("http://localhost:3000/api",requestOptions)
    .then(res=>res.json())
    .then(data=>setTasks([...tasks,data]))
  }

  const deleteTask =(id)=>{
    fetch(`http://localhost:3000/api/${id}`,{method: 'DELETE'})
    .then(res=>res.json())
    .then(data=>{
      const index= tasks.findIndex(ele=>ele.id==data.id)
      if(index != -1){
        let newTask =[...tasks]
        newTask.splice(index,1)
        setTasks(newTask)
      }
    })
  }

  const updateTask =(id,editedTask)=>{
    const requestOptions={
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body :JSON.stringify({task: editedTask})
    }

    fetch(`http://localhost:3000/api/${id}`,requestOptions)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }



  return (
    <div className='w-1/2 h-screen mx-auto my-20 bg-sky-300 p-4 text-left rounded-lg overflow-y-scroll'>
        <Input addTask={addTask} />
        <TaskList taskList={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
  )
}

export default App