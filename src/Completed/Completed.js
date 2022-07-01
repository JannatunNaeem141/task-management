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
        <div>
            <h2>This is Completed page: {completeTasks.length}</h2>
            {
                completeTasks.map(complete => <Complete
                    key={complete._id}
                    complete={complete}
                ></Complete>)
            }
        </div>
    );
};

export default Completed;