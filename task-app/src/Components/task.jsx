import React from 'react';
import '../styles/task.css';
import { AiTwotoneDelete } from "react-icons/ai";

function task({ id, text, completedTask, completeTask, deleteTask }) {
    return(
        <div className={ completedTask ? 'task-container completed' : 'task-container'}>
            <div className='task-text'
                onClick={() => completeTask(id)}>
                {text}
            </div>
            <div className='task-container-icons'
                onClick={() => deleteTask(id)}>
                <AiTwotoneDelete className='task-icon' />
            </div>
        </div>
    );
}

export default task;