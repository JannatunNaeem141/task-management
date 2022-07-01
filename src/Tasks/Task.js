import React from 'react';

const Task = ({ task, handleComplete }) => {
    const { name } = task;

    return (
        <div className='flex'>
            <p>{name}</p>
            <button className='btn btn-primary p-0 mx-5' onClick={() => handleComplete(task)}>Conplete</button>
        </div>
    );
};

export default Task;