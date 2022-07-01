import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    return [tasks, setTasks];
};

export default useTasks;