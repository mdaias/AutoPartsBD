import React, { useEffect, useState } from 'react';

const ManageOrdars = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])
    console.log(orders)

    return (
        <div>
            <h2 className='my-5 text-purple-700 text-3xl'>All Products: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) => <tr>
                                <th>{index+1}</th>
                                <td>{order.name}</td>
                                <td>{order.number}</td>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>${order.price}</td>
                                <td><button className='btn btn-warning font-bold hover:bg-orange-400'>Delete Order</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrdars;