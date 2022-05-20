import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile bg-gray-100">
            <input id="dash-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='py-5 text-4xl font-semibold text-center text-purple-600'>Welcome To Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dash-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard">MY Appointments</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li>{admin && <>
                        <Link to="/dashboard/allusers">All Users</Link>
                        <Link to="/dashboard/addDoctor">Add Doctor</Link>
                        <Link to="/dashboard/manageDoctors">Manage Doctors</Link>
                    </>
                    }</li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;