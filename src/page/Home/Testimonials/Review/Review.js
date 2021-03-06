import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className='flex items-center mt-4'>
                    <div className="avatar">
                        <div className="w-16 lg:w-24 rounded-full ring ring-primary ring-offset-base-100 mr-3">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3>{review.name}</h3>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;