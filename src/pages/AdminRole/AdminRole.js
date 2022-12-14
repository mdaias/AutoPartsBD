import React from 'react';
import { toast } from 'react-toastify';

const AdminRole = ({ user, refetch, index, handleDelete }) => {

    const { email, role } = user;
    
    const makeAdmin = () => {
        fetch(`https://frozen-castle-64433.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
            <th><th>{index + 1}</th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs bg-amber-600">Make Admin</button>}</td>
            <td><button onClick={()=>handleDelete(user._id)} className="btn btn-xs bg-sky-600">Remove User</button></td>
        </tr>
    );

};

export default AdminRole;