import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/allusers').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl'>All Users {users.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=> <UserRow
                            key={user._id}
                            user={user}
                            ></UserRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers; <h2 className='text-2xl'>All Users</h2>