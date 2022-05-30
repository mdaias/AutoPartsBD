import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mx-5 md:mx-20 mt-10 md:mt-10'>
            <div className="grid grid-cols-2 gap-5 items-center">
                <div className='text-left'>
                    <h1 className='font-bold text-3xl md:text-5xl'>Hi, I'm Mohammad Aias</h1>
                    <h3 className='font-bold text-2xl md:text-3xl my-5 md:my10'>Web Developer(Front-end)</h3>
                    <p className='text-lg md:text-xl'>My goal is work in any fast growing local or large multinational organization with immense responsibility. So that, my situational and transformational leadership style, problem solving, communication, language, and volunteering skills can be utilize efficiently to bring a positive change in the organization. In the long run I want to become a full stack web developer.</p>
                    <h1>M</h1>
                </div>
                <div className=''>
                    <img className=' w-1/2 mx-auto' src="https://i.ibb.co/PzjGPVL/IMG-20211110-WA0003-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className='my-10 md:my-16 text-left'>
                <h1 className='text-5xl text-secondary text-center mb-5 md:mb-10'>Address</h1>
                <div className='text-lg md:text-2xl'>
                    <h3>Name:Mohammad Aias</h3>
                    <h3>Email Address: mdaias29@gmail.com</h3>
                    <h3>Educational Background: HSC (admission candidate)</h3>
                    <h3>List of Technologies: Reactjs, Mongodb, Expressjs etc</h3>
                    <h3>My Some Project link: <br />
                        1: https://genius-car-service-20215.web.app/ <br />
                        2: https://spice-warehouse-8f352.firebaseapp.com/home <br />
                        3: https://teal-bubblegum-fe461b.netlify.app/ <br />
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;