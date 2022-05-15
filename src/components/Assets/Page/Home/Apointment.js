import React from 'react';
import doctor from '../../images/doctor.png'
import apointment from '../../images/appointment.png'
import Button from './Button';

const Apointment = () => {
    return (
        <section style={{background:`url(${apointment})`}} className='flex justify-center items-center justify-evenly mt-24'>
            <div className='flex-1 hidden lg:block'>
                <img style={{marginTop:"-120px"}} src={doctor} alt="" />
            </div>
            <div className='flex-1 px-2 mb-2'>
                <h3 className='text-accent xl'>
                Appointment
                </h3>
                <h2 className='text-3xl text-white'>
                Make an appointment Today
                </h2>
                <p className='text-white mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get started</Button>
            </div>
       </section>
    );
};

export default Apointment;