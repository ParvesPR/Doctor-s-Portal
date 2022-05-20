import React from 'react';
import toast from 'react-hot-toast';

const DoctorRow = ({ doctor, refetch, index }) => {
    const { img, name, specialty, email } = doctor;

    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {

            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} deleted successfully`);
                    refetch();
                }
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} className='btn btn-xs btn-error text-white'>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;