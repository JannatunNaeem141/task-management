import React from 'react';
import useTasks from '../hooks/useTasks';

const Task = ({ task, handleComplete }) => {
    const { name } = task;
    const [tasks, setTasks] = useTasks();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = tasks.filter(task => task._id !== id);
                    setTasks(remaining);
                })
        }
    }

    return (
        <div className='flex'>
            <p>{name}</p>
            <button className='btn btn-primary p-0 mx-5' onClick={() => handleComplete(task)}>Conplete</button>
            <button className='btn btn-primary p-0 mx-5' onClick={() => handleDelete(task._id)}>Delete</button>
        </div>
    );
};

export default Task;