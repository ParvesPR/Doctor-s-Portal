import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()).then());

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-12'>
            <h2 className='font-semibold text-2xl my-3'>Manage Doctors: {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctors;