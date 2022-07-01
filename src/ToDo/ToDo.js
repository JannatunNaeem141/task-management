import React from 'react';
import { useForm } from "react-hook-form";
import Task from '../Tasks/Task';

const ToDo = () => {
    const { register, handleSubmit } = useForm();

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
        <div className='add-task-section'>
            <div className='add-inner'>
                <h2 className='add-title'>To-Do</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='form-field'>
                    <input placeholder="New Task" {...register("name", { required: true, maxLength: 30 })} />
                    <div className='add-btn'>
                        <button>Add Furniture</button>
                    </div>
                </form>
            </div>
            <div className="all-tasks">
                <Task></Task>
            </div>
        </div>
    );
};

export default ToDo;