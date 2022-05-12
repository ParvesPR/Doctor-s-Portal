import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'New York',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'New York',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'New York',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        },
    ]
    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary font-bold text-xl'>Testimonial</h3>
                    <h4 className='text-accent text-2xl'>What Our Patients Says</h4>
                </div>
                <div><img src={quote} className="w-16 lg:w-48" alt="" /></div>
            </div>
            <div></div>
        </section>
    );
};

export default Testimonial;