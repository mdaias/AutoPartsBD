import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => {
                setParts(data)
            })
    }, [])

    return (
        <div className='mt-10 md:mx-24 md:mt-20 mb-10'>
            <h1 className='mx-5 text-center font-bold text-xl md:text-6xl mb-2'>Number One <span className=' text-orange-600'>Original Parts</span>, Just For You</h1>
            <h3 className='text-xs md:text-3xl font-bold text-center md:mb-16 mb-10'>Our Products Guarantee a best quality</h3>
            <div className='md:mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.slice(0, 6).map(part => <Part
                        key={part._id}
                        part={part}>
                    </Part>)
                }
            </div>
        </div>
    );
};

export default Parts;