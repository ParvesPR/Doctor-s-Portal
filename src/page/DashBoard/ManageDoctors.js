import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteConfirm from './DeleteConfirm';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)
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
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeleteDoctor={setDeleteDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteConfirm
            deleteDoctor={deleteDoctor}
            setDeleteDoctor={setDeleteDoctor}
            refetch={refetch}
            ></DeleteConfirm>}
        </div>
    );
};

export default ManageDoctors;