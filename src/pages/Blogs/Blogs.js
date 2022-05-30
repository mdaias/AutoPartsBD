import React from 'react';

const Blogs = () => {
    return (
        <div className='my-12 md:my-24 mx-5 md:mx-20 text-left'>
            <article className='font-bold my-10 md:my-20'>
                <h1 className='mb-10 text-2xl'>Q.How will you improved the perfomance of a React Application ?</h1>
                <div>
                    <h2 className="text-xl mb-3">To improve the performance of a React Application:</h2>
                    <p>
                        1.Keeping component state local where necessary. <br />
                        2.Memoizing React components to prevent unnecessary re-renders. <br />
                        3.Code-splitting in React using dynamic import() <br />
                        4.Windowing or list virtualization in React. <br />
                        5.Lazy loading images in React. <br />
                    </p>
                </div>
            </article>

            <article className='font-bold my-10 md:my-20'>
                <h1 className='mb-10 text-2xl'>Q.What are the different ways to manage a state in a React application?</h1>
                <div>
                    <h2 className="text-xl mb-3">There are four main types of state you need to properly manage in a React application:</h2>
                    <p>
                        1.Local State<br />
                        2.Global State<br />
                        3.Server State<br />
                        4.URL State <br />
                    </p>
                </div>
            </article>

            <article className='font-bold my-10 md:my-20'>
                <h1 className='mb-10 text-2xl'>Q.How does prototypical inheritance work?</h1>
                <div>
                    <h2 className="text-xl mb-3">Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using _proto_.</h2>    
                </div>
            </article>

            <article className='font-bold my-10 md:my-20'>
                <h1 className='mb-10 text-2xl'>Q.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <div>
                    <h2 className="text-xl mb-3">One should never set the state directly because of the following reasons:</h2>
                    <p>
                    1. If you update it directly, calling the setState() afterward may just replace the update you made.<br />
                    2. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.<br />
                    3. You will lose control of the state across all components.<br />
                    </p>
                </div>
            </article>

            <article className='font-bold my-10 md:my-20'>
                <h1 className='mb-10 text-2xl'>Q.What is a unit test? Why should write unit tests?</h1>
                <div>
                    <h2 className="text-xl mb-3">A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.</h2>
                    <p>
                    Unit testing is considered part of the programming phase, with the person that wrote the program...unit testing". That isn't because programmers hold the secret sauce to unit testing, it's because it makes sense. The programmer that wrote the prod code will likely know how to access the parts that can be tested easily and how to mock objects that can't be accessed otherwise. It's a time trade off. Other times, someone will come in after the fact and write tests to help create safe guards while they refactor or further develop that area of the code base.<br />
                    </p>
                </div>
            </article>
            
        </div>
    );
};

export default Blogs;