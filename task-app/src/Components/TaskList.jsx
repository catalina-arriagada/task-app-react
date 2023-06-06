import React, { useState } from 'react';
import Form from '../Components/Form';
import '../styles/listTask.css';
import Task from '../Components/task';

function TaskList() {

    const [tasks, setTasks] = useState( [] );

    const addTask = task => {
      //if text is not empty without spaces:
      if(task.text.trim()){
        task.text = task.text.trim(); //delete empty spaces
        const updateTask = [task, ...tasks]; // [task, ...past tasks] ...converts arrays to individual objects (inside an array) //this line adds new tasks to the list and keep the added tasks
        setTasks(updateTask);
      }
    };

    const deleteTask = id => {
      const updateTasks = tasks.filter(task => task.id !== id);
      setTasks(updateTasks);
    };

    const completeTask = id => {
      const updateTasks = tasks.map(task => {
        if (task.id === id) {
          task.completedTask = !task.completedTask; //if it's false changes to true and viceverce
        }
        return task;
      });
      setTasks(updateTasks);
    };

    return (
      //Fragments:
      <>
        <Form onSubmit={addTask}/>
        <div className="task-list-container">
          {
            tasks.map((task) =>
              <Task 
                key={task.id} //this is needed
                id={task.id}
                text = {task.text}
                completedTask = {task.completedTask}
                completeTask={completeTask}
                deleteTask = {deleteTask}
               />
            )
          };
        </div>
      </>
    );
}

export default TaskList;