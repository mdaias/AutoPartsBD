import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const PurchasePage = () => {
    const { id } = useParams()
    const [part, setPart] = useState({});
    const [user] = useAuthState(auth);
    const [order,setOrder] = useState(false)



    const { name, description, price, quantity, picture, _id } = part;

    useEffect(() => {
        fetch(`https://frozen-castle-64433.herokuapp.com/parts/${id}`)
            .then(res => res.json())
            .then(data => {
                setPart(data)
            })
    }, [id,order]);

    const handlePurchase = event => {
        event.preventDefault();
        const totalPrice = parseInt(price) * parseInt(quantity);
        const newPrice = JSON.stringify(totalPrice)

        const orderData = {
            email: user?.email,
            name: user?.displayName,
            productName: name,
            number: event.target.number.value,
            quantity: event.target.quantity.value,
            price: newPrice,
        }
        console.log(orderData)

        // post order in mongodb
        const url = `https://frozen-castle-64433.herokuapp.com/order`;
        if (event.target.quantity.value > 10 && event.target.quantity.value < quantity) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderData)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result.insertedId) {
                        toast.success('Order Item is successfully added')
                        setOrder(!order)
                        event.target.reset();
                    }
                })
        }
        else {
            toast.error('Fail!!! Please Order Minimum 10 piece')
            event.target.reset();
        }

        // update stock in mongodb
        const updateStock = parseInt(quantity) - parseInt(event.target.quantity.value);
        

        // send data to the server
        const url2 = `https://frozen-castle-64433.herokuapp.com/parts/${_id}`;
        fetch(url2, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: updateStock })
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast.success('Delivered successfully!!!');
                
            });

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-center">
                    <div className="card md:w-96 bg-base-100 shadow-xl">
                        <figure><img className=' w-1/2' src={picture} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {name}!
                                <div className="badge badge-secondary">50% off</div>
                            </h2>
                            <p>{description}</p>
                            <h3 className='text-lg font-bold'>Price: ${price} (per piece)</h3>
                            <h3 className='text-lg font-bold '>Stock: {quantity}</h3>
                            <h1 className='font-semibold text-xl text-purple-800'>Minimum order 10 piece</h1>
                        </div>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handlePurchase}>
                            <div className="form-control">
                                <input type="text" value={user?.email} readOnly className="input input-bordered" />
                            </div>
                            <div className="form-control mt-5">
                                <input type="text" name='name' value={user?.displayName} className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control mt-5">
                                <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-5">
                                <input type="text" name='address' placeholder="Address" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-5">
                                <input type="text" name='number' placeholder="Number" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary' value="Purchase" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;