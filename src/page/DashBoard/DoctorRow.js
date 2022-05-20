import React from 'react';
import toast from 'react-hot-toast';

const DoctorRow = ({ doctor, refetch, index, setDeleteDoctor }) => {
    const { img, name, specialty, email } = doctor;
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
            <td>
                <label onClick={() => setDeleteDoctor(doctor)} htmlFor="delete-confirm" className="btn btn-xs btn-error text-white"> Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;