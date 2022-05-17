import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
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
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;