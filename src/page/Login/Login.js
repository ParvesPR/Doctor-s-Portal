import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card lg:max-w-lg shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>

                    {/* EMAIL FIELD */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Enter a valid email address'
                                    }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt">{errors.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt">{errors.message}</span>}

                            </label>
                        </div>
                        <input type="submit" />
                    </form>

                    <div className="divider">OR</div>
                    <button className="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;