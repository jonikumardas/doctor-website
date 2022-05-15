import React from 'react';
import img1 from '../../images/people1.png'
import img2 from '../../images/people2.png'
import img3 from '../../images/people3.png'
import Tastimonals from './Tastimonals';
import Qute from '../../icons/quote.svg'

const Tastymonal = () => {
    const tastymonals = [
        {
            _id:1,
            name:'Winson Herry',
            country:'California',
            img:`${img1}`
        },
        {
            _id:2,
            name:'Winson Herry2',
            country:'Alska',
            img:`${img2}`
        },
        {
            _id:3,
            name:'Winson Herry',
            country:'NewYeork',
            img:`${img3}`
        }
        
    ]

    return (
        <div style={{background:`url(${Qute})`, backgroundRepeat:"no-repeat" , backgroundPosition:'right top'}} className='px-12'>
            <div className='my-20'>
            <h4 className='text-accent'>Testimonial</h4>
                <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
            <div className='lg:flex justify-center items-center justify-evenly'>
                {
                    tastymonals.map(tastymonal => <Tastimonals key={tastymonal._id}
                    
                        tastymonal={tastymonal}></Tastimonals>)
                }
            </div>
            
            
        </div>
    );
};

export default Tastymonal;