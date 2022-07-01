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
                    window.location.reload();
                })
        }
    }

    return (
        <div className='flex bg-gray-700 mb-2 rounded-md lg:py-3 md:py-2 py-1 px-3 text-white justify-between'>
            <div>
                <p>{name}</p>
            </div>
            <div>
                <button className='text-green-400 mx-5' onClick={() => handleComplete(task.name)}>Complete</button>
                <button className='text-red-400' onClick={() => handleDelete(task._id)}>Delete</button>
            </div>
        </div>
    );
};

export default Task;