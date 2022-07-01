import React from 'react';

const Complete = ({ complete }) => {
    const { name } = complete;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/complete/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    window.location.reload();
                })
        }
    }

    return (
        <div className='flex bg-gray-700 mb-2 rounded-md lg:py-3 md:py-2 py-1 px-3 text-white justify-between'>
            <p>{name}</p>
            <button className='text-red-400' onClick={() => handleDelete(complete._id)}>Delete</button>
        </div>
    );
};

export default Complete;