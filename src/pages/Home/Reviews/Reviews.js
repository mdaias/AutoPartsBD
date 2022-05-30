import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className='my-10 md:my-20 mx-5 md:mx-24'>
            <h1 className='text-center my-10 font-semibold font-serif  text-5xl text-fuchsia-500'>All Reviews</h1>
            <div className='ml-12 my-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                {
                    reviews.map(review => (<div className='shadow-lg rounded-2xl w-[350px] bg-white p-4'>

                        <div className="div flex justify-evenly items-center">
                            <img className=' w-20 rounded-full' src={review.picture} alt="" />
                            <h1 className='text-xl font-bold text-cyan-900'>{review.name}</h1>
                        </div>
                        <div>
                            <h2 className='my-4 text-center font-bold text-cyan-900'>Rating: {review.rating} <small>Star</small></h2>
                            <h3 className='my-3 text-orange-500 text-left font-bold'>Verified Purchase</h3>
                            <p className='font-semibold'>{review.comment}</p>
                        </div>

                    </div>))
                }
            </div>
        </div>
    );
};

export default Reviews;