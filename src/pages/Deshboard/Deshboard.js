import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="deshboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-5xl'>deshboard</h1>
                <Outlet/>

            </div>
            <div className="drawer-side">
                <label htmlFor="deshboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-36 bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/deshboard/myorders'>My Orders</Link></li>
                    <li><Link to='/deshboard/addreview'>Add a Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Deshboard;