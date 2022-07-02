import React from 'react';

const Complete = ({ complete }) => {
    const { name } = complete;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://true-toque-74988.herokuapp.com/complete/${id}`;
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
            <button title="Delete" className='text-red-400' onClick={() => handleDelete(complete._id)}><i class="fa-solid fa-trash-can"></i></button>
        </div>
    );
};

export default Complete;