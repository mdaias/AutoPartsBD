import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data)
        const productData = {
            name: data.name,
            price: data.price,
            picture: data.picture,
            quantity: data.stock,
            description: data.description
        }
        const url = `http://localhost:5000/parts`;
        if (data.stock > 0 && data.price > 0) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result.insertedId) {
                        toast.success('Spice Item is successfully added')
                        reset()
                    }
                })
        }
        else {
            toast.error('Please input a possitive amount of stock and prices')
            reset()
        }
    };

    return (
        <div className=' md:w-1/2 mx-auto py-20 bg-no-repeat'>

            <div className='register-form container'>

                <h1 className='text-center font-bold md:text-5xl text-3xl text-sky-500'>Add a New <span className=' text-orange-400'>Parts</span></h1>

                <form onSubmit={handleSubmit(onSubmit)} className='mx-10'>

                    <input className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Product Name' required {...register("name", { required: true, maxLength: 20 })} />

                    <textarea className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Description' required {...register("description")} />

                    <input className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Product Price' type="number" required {...register("price")} />

                    <input className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Quantity' type="number" required {...register("stock")} />

                    <input className='input input-bordered text-xl font-bold block input-info w-full mt-5' placeholder='Photo Url' type="text" required {...register("picture")} />

                    <input className='text-white flex justify-center cursor-pointer mt-10  bg-orange-500 font-bold p-2 md:w-80 w-56 mx-auto rounded-full' type="submit" value="Add Spice" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;