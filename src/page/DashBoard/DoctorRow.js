import React from 'react';

const DoctorRow = ({ doctor, refetch, index }) => {
    const { img, name, specialty } = doctor
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded-full">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button className='btn btn-xs btn-error text-white'>Delete</button></td>
        </tr>
    );
};

export default DoctorRow;