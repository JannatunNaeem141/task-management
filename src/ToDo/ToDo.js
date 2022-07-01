import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Task from '../Tasks/Task';
import useTasks from '../hooks/useTasks';

const ToDo = () => {
    const { register, handleSubmit } = useForm();
    const [tasks, setTasks] = useTasks();
    const [complete, setComplete] = useState([]);

    const handleComplete = (task) => {
        console.log(task);
        const newComplete = [...complete, task];
        setComplete(newComplete);
    }

    const onSubmit = data => {
        const url = `http://localhost:5000/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div>
            <div>
                <h2>To-Do</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="New Task" {...register("name", { required: true, maxLength: 30 })} />
                    <div>
                        <button className='btn'>Add Task</button>
                    </div>
                </form>
            </div>
            <div>
                {
                    tasks.map(task => <Task
                        key={task._id}
                        task={task}
                        handleComplete={handleComplete}
                    ></Task>)
                }
            </div>
        </div>
    );
};

export default ToDo;