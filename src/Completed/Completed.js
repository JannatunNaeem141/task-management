import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Complete from './Complete';

const Completed = () => {
    const [completeTasks, setCompleteTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/complete')
            .then(res => res.json())
            .then(data => setCompleteTasks(data))
    }, [])

    return (
        <div className='h-screen'>
            <div className='max-w-7xl mx-auto flex justify-center'>
                <div className='lg:w-1/2 md:w-5/6 w-11/12 border-2 rounded-xl py-12 mt-5 px-10'>
                    <h2 className='text-center lg:text-4xl md:text-3xl text-2xl font-bold mb-5' style={{ color: "#F2E7FE" }}>Completed</h2>
                    {
                        completeTasks.map(complete => <Complete
                            key={complete._id}
                            complete={complete}
                        ></Complete>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Completed;