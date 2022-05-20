import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
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
            <div className="overflow-x-auto">

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            ></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;