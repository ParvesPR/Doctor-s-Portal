import React from 'react';

const Login = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card lg:max-w-lg shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>
                    <button className='btn btn-secondary text-white'>Login</button>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;