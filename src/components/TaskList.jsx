import React from 'react'
import Task from './Task'


const TaskList = ({deleteTask,taskList,updateTask}) => {
    //console.log(taskList);
  return (
    <div className='my-5 py-2'>
        {taskList.map((task)=>{
            return <Task key={task.id} id={task.id} task={task.task} deleteTask={deleteTask} updateTask={updateTask}/>
        })}    
    </div>
  )
}

export default TaskList