import React from 'react';
import useTasks from '../hooks/useTasks';

const Task = ({ task, handleComplete }) => {
    const { name } = task;
    const [tasks, setTasks] = useTasks();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://true-toque-74988.herokuapp.com/task/${id}`;
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
                <button title="Complete" className='text-green-400 mx-5' onClick={() => handleComplete(task.name)}><i class="fa-solid fa-check"></i></button>
                <button title="Edit"><i className="fa-solid fa-pen-to-square mr-5" style={{ color: "#F2E7FE" }}></i></button>
                <button title="Delete" className='text-red-400' onClick={() => handleDelete(task._id)}><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    );
};

export default Task;