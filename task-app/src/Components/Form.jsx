import React, { useState } from 'react';
import '../styles/formTask.css';
import { v4 as uuidv4 } from 'uuid'; 

function Task(props) {

    const [input, setInput] = useState('');

    const inputState = event => {
        setInput(event.target.value); //show value
    };

    const sendFormManager = event => {
        event.preventDefault(); //not load all the app when we send the form
        
        const newTask = {
            id: uuidv4(),
            text : input,
            completeTask: false
        };

        props.onSubmit(newTask);
    };

    return (
        <form className='task-form' 
              onSubmit={sendFormManager}>
            <input 
            className='task-input'
            type="text"
            placeholder='Write a task'
            name='text'
            onChange={inputState}
             />
            <button className='task-button'>
                Add Task
            </button>
        </form>
    );
}

export default Task;