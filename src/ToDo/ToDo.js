import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import Task from '../Tasks/Task';
import useTasks from '../hooks/useTasks';

const ToDo = () => {
    const { register, handleSubmit } = useForm();
    const [tasks, setTasks] = useTasks();
    const [complete, setComplete] = useState([]);

    const handleComplete = task => {
        console.log(task);
        const url = `https://true-toque-74988.herokuapp.com/complete`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    const onSubmit = data => {
        console.log(data);
        const url = `https://true-toque-74988.herokuapp.com/task`;
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
                window.location.reload();
            })
    };

    return (
        <div className='h-screen'>
            <div className='max-w-7xl mx-auto flex justify-center '>
                <div className='lg:w-1/2 md:w-5/6 w-11/12 border-2 rounded-xl py-12 mt-5 lg:px-10 md:px-8 px-3'>
                    <h2 className='text-center lg:text-4xl md:text-3xl text-2xl font-bold mb-5' style={{ color: "#F2E7FE" }}>To-Do</h2>
                    <div>
                        <form className='flex' onSubmit={handleSubmit(onSubmit)}>
                            <input className='border-2 rounded lg:px-3 md:px-3 px-2 lg:py-2 md:py-2 py-1 mb-5 mr-5 w-full text-lg' placeholder="New Task" {...register("name", { required: true, maxLength: 30 })} />
                            <div>
                                <button className='text-lg text-white border-2 bg-red-600 rounded-lg lg:py-2 md:py-2 py-1 px-5'>Add</button>
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
            </div>
        </div>

    );
};

export default ToDo;