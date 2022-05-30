import React from 'react';
import { useQuery } from 'react-query';
import AdminRole from '../AdminRole/AdminRole';
import Loading from '../Shared/Loading/Loading';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://frozen-castle-64433.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }


    // Delete user
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure! delete this items?');
        if (proceed) {
            const url = `https://frozen-castle-64433.herokuapp.com//${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <div>
            <h2 className="text-2xl text-orange-400 my-5">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Make Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <AdminRole 
                                index={index}
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                handleDelete={handleDelete}
                            ></AdminRole>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;