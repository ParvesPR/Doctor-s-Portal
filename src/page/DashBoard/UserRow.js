import React from 'react';

const UserRow = ({ user }) => {
    const { email } = user;
    return (
        <tr>
            <td className='font-bold'>1</td>
            <td>{email}</td>

        </tr>);
};

export default UserRow;