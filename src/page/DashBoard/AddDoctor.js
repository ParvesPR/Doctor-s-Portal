import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgStorageKey = 'e2d45fddfbfdb6662a3ef75d64ca3f0b';

    const { data: appointments, isLoading } = useQuery(['appointments'], () => fetch(`http://localhost:5000/appointment`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = async data => {
        console.log('data', data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log('imgbb', result)

                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to your database 
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add a doctor')
                            }
                        })
                }
            })
    };

    return (
        <div className='px-8 w-96 mx-auto'>
            <div>
                <h2 className='text-3xl font-bold my-3'>Add a Doctor</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* NAME FIELD */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="name"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt font-semibold text-red-500">{errors.name.message}</span>}
                            {errors.name?.type === 'pattern' && <span className="label-text-alt font-semibold text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    {/* EMAIL FIELD */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="input input-bordered w-full max-w-xs"
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
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt font-semibold text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt font-semibold text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/* SPECIALTY FIELD */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select {...register("specialty")} className="select input-bordered w-full max-w-xs">
                            {
                                appointments.map(appointment => <option
                                    key={appointment._id}
                                    value={appointment.name}
                                >{appointment.name}</option>)
                            }
                        </select>
                    </div>

                    {/* IMAGE UPLOAD FIELD */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is required'
                                },
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt font-semibold text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>
                    <input className='btn w-full mt-3' value="Sign up" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;