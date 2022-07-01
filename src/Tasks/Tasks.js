import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Task from './Task';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])
    return (
        <div>
            <h2 className='tasks-title'>All Products</h2>
            <div className='all-tasks'>
                {
                    tasks.map(task => <Task
                        key={task._id}
                        task={task}
                    ></Task>)
                }
            </div>

        </div>
    );
};

export default Tasks;