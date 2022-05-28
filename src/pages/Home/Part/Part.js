import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {
    const navigate = useNavigate();
    const { name, description, price, quantity, picture, _id, } = part;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className=' w-1/2' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}!
                    <div className="badge badge-secondary">50% off</div>
                </h2>
                <p>{description}</p>
                <div className='flex justify-between'>
                    <h3 className='text-lg font-bold'>Price: ${price}</h3>
                    <h3 className='text-lg font-bold '>Stock: {quantity}</h3>
                </div>
                <div className="card-actions justify-center">
                    <button onClick={() => navigate(`/part/${_id}`)} className='badge hover:text-white bg-slate-300 font-bold hover:bg-pink-500 cursor-pointer p-3 w-32 mt-5 badge-outline'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;