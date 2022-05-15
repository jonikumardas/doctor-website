import React from 'react';
import Button from './Button';
import apointment from '../../images/appointment.png';

const ContactUs = () => {
    return (
        <div className='mt-2 pb-2' style={{ background: `url(${apointment})` }}>
             <h1 className='text-center text-accent bold'>Contact Us</h1>
            <p className='text-center text-3xl mb-3'>Stay contacted with us</p>
            <div className='flex justify-center items-center'>
            <form>
                    <input style={{ width:"337px"}} className='mb-2 border-2 py-1 px-3 rounded' type="email" placeholder='Email Address' /> <br />
                <input style={{ width:"337px"}} className='mb-2 border-2 py-1 px-3 rounded' type="text" placeholder='Subject' /><br />
                    <textarea className='mb-2 border-2 py-1 px-3 rounded' name="text" id="" cols="40" rows="5" placeholder=' Your massage'></textarea> <br />
                    <Button> submit </Button>
                </form>
                
            </div>
           
            </div>
    );
};

export default ContactUs;