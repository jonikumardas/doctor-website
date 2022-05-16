import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Services from './Services';

const AbailableApointment = ({ date }) => {
    const [services, setServices] = useState([]);  
    const [bookApointment, setBookApointment] = useState('');
    useEffect(() => { 
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className='text-2xl text-center text-accent'>Available Apointment on :{format(date, 'PP')} </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                services.map(service => <Services key={service._id}
                    service={service}
                    setBookApointment={setBookApointment}
                ></Services>)
                }
            </div>
            {
               bookApointment && <BookingModal bookApointment={bookApointment} key={bookApointment._id} setBookApointment={setBookApointment} date={date}></BookingModal> 
            }
        </div>
    );
};

export default AbailableApointment;