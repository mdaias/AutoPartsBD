import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/UseAdmin';

const Deshboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile">
            <input id="deshboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-5xl text-sky-400'>Deshboard</h1>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="deshboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-36 bg-base-100 text-base-content">
                    {/* All user can see this option */}
                    <li><Link to='/deshboard'>Profile</Link></li>

                    {/* Only User can see this options */}
                    {!admin && <li><Link to='/deshboard/myorders'>My Orders</Link></li>}
                    {!admin && <li><Link to='/deshboard/addreview'>Add a Review</Link></li>
                    }

                    {/* Admin part, only admin can see this option*/}
                    {admin && <li><Link to='/deshboard/makeadmin'>Make Admin</Link></li>}
                    {admin && <li><Link to='/deshboard/manageparts'>Manage Parts</Link></li>}
                    {admin && <li><Link to='/deshboard/manageorders'>Manage All Orders</Link></li>}
                    {admin && <li><Link to='/deshboard/addparts'>Add New Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Deshboard;