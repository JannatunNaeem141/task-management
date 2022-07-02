import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('https://true-toque-74988.herokuapp.com/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);

    return [tasks, setTasks];
};

export default useTasks;