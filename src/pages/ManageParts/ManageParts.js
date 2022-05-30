import React, { useEffect, useState } from 'react';

const ManageParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => {
                setParts(data)
            })
    }, []);


    // Delete products
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure! delete this items?');
        if (proceed) {
            const url = `http://localhost:5000/parts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = parts.filter(part => part._id !== id);
                    setParts(remaining);
                })
        }
    }

    return (
        <div>
            <h2 className='my-5 text-purple-700 text-3xl'>All Products: {parts.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map(part => <tr>
                                <th>{part._id}</th>
                                <td>{part.name}</td>
                                <td>{part.quantity}</td>
                                <td>${part.price}</td>
                                <td><button onClick={()=>handleDelete(part._id)} className='btn btn-warning font-bold hover:bg-orange-400'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageParts;